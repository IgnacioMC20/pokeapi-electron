const { app, BrowserWindow, ipcMain } = require('electron')
const { guardarDatos } = require('./db');
const path = require('path');

const createWindow = () => {
  const ventana = new BrowserWindow({
    width: 700,
    height: 700,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  })
  
  ventana.loadFile('index.html')
}


ipcMain.on('registroValido', (event, {name, type, sprite, weight, id}) => {
  guardarDatos(id, name, weight, sprite, type)
})

app.whenReady().then(createWindow)