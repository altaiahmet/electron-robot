const electron = require('electron');
const url = require('url');
const path = require('path');
const robot = require("robotjs");


const { app, BrowserWindow } = electron;

let indexWindow;



app.on('ready', () => {
    indexWindow = new BrowserWindow({});

    indexWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        })
    )

    const mouse = robot.getMousePos();

    let hex = robot.getPixelColor(mouse.x, mouse.y);
    console.log(`#${hex} at x: ${mouse.x}, y:${mouse.y}`);

})