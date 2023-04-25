/** 
 * This sample illustrates a simple electron app
 * packaged from a react project.  
 * 
 * */
 const { app, BrowserWindow, Menu, ipcMain } = require('electron');
 const path = require('path');
 const isDev = require('electron-is-dev');
 
 let mainWindow = null;
 const iconPath = path.join(__dirname, 'images', process.platform === 'win32' ? 'icon.ico' : 'icon.png');
 
 // Create an application menu
 const menuTemplate = [
   // ...
 ];
 
 const menu = Menu.buildFromTemplate(menuTemplate);
 Menu.setApplicationMenu(menu);
 
 async function createWindow() {
   mainWindow = new BrowserWindow({
     height: 600,
     width: 800,
     webPreferences: {
       nodeIntegration: true,
       enableRemoteModule: true,
       contextIsolation: false,
       backgroundThrottling: false,
     },
     icon: iconPath,
     title: 'My App title',
   });
 
   // load index.html document from the react app (make sure to put in the right file path)
   if (isDev) {
     mainWindow.loadURL('http://localhost:3000');
   } else {
     mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));
   }
 }
 
 app.on('ready', createWindow);
 
 app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') {
     app.quit();
   }
 });
 
 app.on('activate', () => {
   if (BrowserWindow.getAllWindows().length === 0) {
     createWindow();
   }
 });
 
 // Define any IPC or other custom functionality below here
 // Remember the four objects to use when 
 //communicating between processes(in this case, your react -renderer process- and electron process - main process)
 /* 
   - ipcRenderer.send(send messages/data from react process to electron app process)
   - ipcMain.on(receive messages/data from react process)
   - mainWindowwebContents.send(send messages/data from elecrton app process to react process)
   - ipcRenderer.on(receive messages/data from electron app) 
   */
 
 // Sample: To receive message from react side:
 
 ipcMain.on('eventToListenTo', (event, messageReceived) => {
   // do stuff here
 })
 
 // Sample: To send message to react side
 
 let messageToSend = 'I am sending Message';
 mainWindow.webContents.send('eventToListen', messageToSend);
 