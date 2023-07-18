import { ipcMain, BrowserWindow } from "electron";

type MessageObj<T> = {
    [K in keyof T]: (...args: any) => void;
};

type BrowserFilterFunc = (params: BrowserWindow, index: number) => boolean

export default class MainAPI<
    EventList extends MessageObj<EventList>,
    MessageList extends MessageObj<MessageList>
> {
    private listener: Partial<Record<keyof EventList, any>> = {}
    private channel: string;
    constructor(channel = "App") {
        this.channel = channel;
        this.bind(); // 绑定当前
    }

    on<
        T extends keyof EventList, // 事件
        F extends EventList[T] // 事件函数
    >(eventName: T, func: F) {
        if (this.listener[eventName]) {
            throw new Error(`Event ${eventName.toString()} already exists`);
        }
        this.listener[eventName] = func.bind(this); // 添加事件
    }

    off<T extends keyof EventList>(eventName: T) {
        if (!this.listener[eventName]) {
            throw new Error(`Event ${eventName.toString()} does not exist`);
        }
        delete this.listener[eventName]; // 删除事件
    }

    // 对浏览器端发送请求
    send<
        T extends keyof MessageList, // 事件
        Params extends Parameters<MessageList[T]>, // 事件函数
    >(messageName: T, filter?: BrowserFilterFunc, ...args: Params) {
        let allWindows = BrowserWindow.getAllWindows();
        if (filter) {
            allWindows = allWindows.filter(filter);
        }
        allWindows.forEach((window) => {
            window.webContents.send(messageName as string, ...args);
        })
    }

    private bind<
        T extends keyof EventList, // 事件
        F extends EventList[T] // 事件函数
    >() {
        ipcMain.handle(this.channel, (event, messageName, ...args) => {
            if (this.listener[messageName]) {
                return this.listener[messageName](...args);
            } else {
                throw new Error(`Event ${messageName.toString()} does not exist`);
            }
        });
    }
}
