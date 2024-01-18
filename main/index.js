// Native
const { join } = require('path');
const { format } = require('url');

// Packages
const { BrowserWindow, app, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const prepareNext = require('electron-next');
const windowStateKeeper = require('electron-window-state');
let mainWindow, mainWindowState;

// Prepare the renderer once the app is ready
app.whenReady().then(async () => {
    await prepareNext('./renderer');

    mainWindowState = windowStateKeeper({
        defaultWidth: 600,
        defaultHeight: 900,
    });

    mainWindow = new BrowserWindow({
        x: 940,
        y: 0,
        width: 600,
        height: 980,
        webPreferences: {
            nodeIntegration: false,
            preload: join(__dirname, 'preload.js'),
        },
        title: 'CodeX',
    });

    const url = isDev
        ? 'http://localhost:8000'
        : format({
              pathname: join(__dirname, '../renderer/out/index.html'),
              protocol: 'file:',
              slashes: true,
          });

    mainWindow.loadURL(url);

    if (isDev) mainWindow.webContents.openDevTools();
    mainWindowState.manage(mainWindow);
});

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit);

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on('message', (event, message) => {
    event.sender.send('message', message);
});
