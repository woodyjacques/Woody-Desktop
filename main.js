const { app, BrowserWindow } = require("electron");
const { createWindow } = require("./js/home");
require('dotenv').config();

app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
