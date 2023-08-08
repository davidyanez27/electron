const {BrowserWindow} = require('electron');
const path = require('path');

let window;

function createWindow(){
    window = new BrowserWindow({
        width:800,
        height:800,
        webPreferences:{
            nodeIntegration: true
        }
    })
    window.loadFile(path.join(__dirname, 'components/index.html'));
      // Open the DevTools.
  mainWindow.webContents.openDevTools();

}

module.exports = {
    createWindow
};
