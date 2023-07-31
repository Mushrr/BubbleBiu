import { contextBridge } from "electron";
import RendererAPI from "./apis/RenderAPI";
import { RendererMessage, MainMessage } from "./apis/types";

// 暴露给渲染进程的API
const IPC = new RendererAPI<RendererMessage, MainMessage>();
contextBridge.exposeInMainWorld("ipc", {
  send: (...args: any[]) => { return IPC.send.bind(IPC)(...args); },
});