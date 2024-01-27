// Native
const { join } = require('path');
const { format } = require('url');

// Packages
const { BrowserWindow, app, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const prepareNext = require('electron-next');
const windowStateKeeper = require('electron-window-state');
const db = require('../models');
const { login, createUser } = require('../mainApi/user');
const { createContest, createProblem } = require('../mainApi/contest');

let mainWindow, mainWindowState;

// Prepare the renderer once the app is ready
app.whenReady().then(async () => {
    await prepareNext('./renderer');

    db.sequelize
        .sync()
        .then(() => {
            console.log('Database connection successful.');
        })
        .catch((error) => {
            console.log('Sequelize Error: ', error);
        });

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
    // if (isDev) mainWindow.webContents.openDevTools();
    mainWindowState.manage(mainWindow);
});

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit);

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on('message', (event, message) => {
    event.sender.send('message', message);
});
ipcMain.handle('signup', (event, data) => {
    console.log('Signup data: ', data);
    return createUser(data);
});
ipcMain.handle('login', (event, data) => {
    console.log('Login data: ', data);
    return login(data);
});
ipcMain.handle('createContest', (e, data) => {
    console.log('Contest data: ', data);
    return createContest(data);
});
ipcMain.handle('createProblem', (e, data) => {
    console.log('Problem data: ', data);
    return createProblem(data);
});
