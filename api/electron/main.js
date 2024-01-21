// const {app, BrowserWindow}=require('electron')
// const TouchscreenWindow = require('electron-touchscreen');



// function createWindow(){
//     const win=new BrowserWindow({

//         width:600,
//         height:600
//     })
//     win.loadFile('src/index.html')
// }

// app.whenReady().then(createWindow)
// app.on('window-all-closed',()=>{
//     app.quit()
// })
const path = require('path');
const url = require('url');
const electron = require('electron');

const TouchscreenWindow = require('electron-touchscreen');

let win = null;
const app = electron.app;

app.on('ready', ()=> {
  const demo_url = url.format({
    pathname: path.join(__dirname, 'src/index.html'),
    protocol: 'file', 
    slashes: true,
  });

  win = new TouchscreenWindow({url: demo_url});
});