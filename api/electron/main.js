const {app, BrowserWindow}=require('electron')



function createWindow(){
    const win=new BrowserWindow({

        width:600,
        height:600
    })
    win.loadFile('src/index.html')
}

app.whenReady().then(createWindow)
app.on('window-all-closed',()=>{
    app.quit()
})