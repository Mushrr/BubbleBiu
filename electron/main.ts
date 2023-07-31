import { app, BrowserWindow } from "electron";
import path from "node:path";
import MainAPI from "./apis/MainAPI";
import { MainMessage, RendererMessage } from "./apis/types";

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, "../public");


let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    titleBarStyle: "hidden",
  });

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", (new Date).toLocaleString());
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }

  // 顶部控件
}

app.on("window-all-closed", () => {
  win = null;
});

app.whenReady().then(createWindow).then(() => {
  const IPC = new MainAPI<MainMessage, RendererMessage>();
  IPC.on("maxWindow", () => {
    if (win?.isMaximized()) {
      win?.unmaximize();
    } else {
      win?.maximize();
    }
  });
  IPC.on("quitWindow", () => {
    app?.quit();
  });
  IPC.on("minWindow", () => {
    if (win?.isMinimized()) {
      win?.restore();
    } else {
      win?.minimize();
    }
  });
  IPC.on("add", (a, b) => {
    return a + b;
  });
});

