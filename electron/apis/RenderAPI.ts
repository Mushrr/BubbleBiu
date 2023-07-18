import { ipcRenderer } from "electron";

type MessageObj<T> = {
    [K in keyof T]: (...args: any) => void;
};

export default class RendererAPI<
    EventList extends MessageObj<EventList>,
    MessageList extends MessageObj<MessageList>
> {
    private listener: Partial<Record<keyof EventList, any>> = {}
    private channel: string;
    constructor(channel = "App") {
        this.channel = channel;
    }

    on<
        EventName extends keyof EventList, // 事件
        EventFunc extends EventList[EventName] // 事件函数
    >(eventName: EventName, func: EventFunc) {
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

    // 对主进程发送请求
    send<
        T extends keyof MessageList, // 事件
        Params extends Parameters<MessageList[T]>, // 事件函数
    >(messageName: T, ...args: Params): Promise<ReturnType<MessageList[T]>> {
        return ipcRenderer.invoke(this.channel, messageName, ...args);
    }
}

