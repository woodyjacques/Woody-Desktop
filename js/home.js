const { ipcMain, BrowserWindow } = require("electron");
const path = require("path");

const { categoriaWindow, closeModalCat } = require("./cateWindow");
const {bookWindow, closeModalBook } = require("./bookWindow");
const {peliWindow, closeModalPeli } = require("./peliWindow");
const {requestAllCategorias, requestAllClientes, requestAllBooks, requestAllPeli} = require("./getDate");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 700,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      cache: false,
    },
    icon: path.join(__dirname, "../src/assets/Logo.png"),
  });
  // mainWindow.setMenu(null);
  mainWindow.loadFile(path.join(__dirname, "../index.html"));

  mainWindow.on("close", () => {closeModalCat(); closeModalBook();});

}

// para categoria

ipcMain.on("show-categoria-cerrado", async () => {
  closeModalCat();
  await requestAllCategorias(mainWindow);
});

ipcMain.on("categoria-eliminado", async () => {
  await requestAllCategorias(mainWindow);
});

ipcMain.on("request-all-categories", async (event, args) => {
  await requestAllCategorias(mainWindow);
});

// para los clientes
ipcMain.on("request-all-clients", async (event, args) => {
  await requestAllClientes(mainWindow);
});

// para los libros
ipcMain.on("request-all-books", async (event, args) => {
  await requestAllBooks(mainWindow);
});

ipcMain.on("show-libro-cerrado", async () => {
  closeModalBook();
  await requestAllBooks(mainWindow);
});

ipcMain.on("libro-eliminado", async () => {
  await requestAllBooks(mainWindow);
});

// para los peliculas
ipcMain.on("request-all-peli", async (event, args) => {
  await requestAllPeli(mainWindow);
});

ipcMain.on("show-peli-cerrado", async () => {
  closeModalPeli();
  await requestAllPeli(mainWindow);
});

ipcMain.on("peli-eliminado", async () => {
  await requestAllPeli(mainWindow);
});

module.exports = { createWindow };
