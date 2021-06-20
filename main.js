const { BrowserWindow, app } = require('electron');

const path = require('path');
const isDev = !app.isPackaged;

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

let express = require('./src/express/server');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow);