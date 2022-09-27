const electron = require('electron');
const app = electron.app;
const path = require('path')
const BrowserWindow = electron.BrowserWindow;

const isDev = require('electron-is-dev');
let mainWindow;
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

function createWindow() {
  console.log(__dirname)
  mainWindow = new BrowserWindow({ width: 1000, height: 680, title:'Yash Khatri WYNK' ,icon:path.join(__dirname,'/favicon.jpg')});

  mainWindow.loadURL('https://wynk.in/music')
  mainWindow.removeMenu()
  if (isDev) {
    // Open the DevTools.
    // BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    // mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
