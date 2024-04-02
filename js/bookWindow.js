const { BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const axios = require("axios");
const { apiUrl } = require("./api");

let bookWindow = null;
function boWindow() {
  bookWindow = new BrowserWindow({
    width: 500,
    height: 700,
    minWidth: 500,
    minHeight: 700,
    maxWidth: 500,
    maxHeight: 700,
    icon: path.join(__dirname, "../src/assets/Logo.png"),
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  // bookWindow.setMenu(null);
  bookWindow.loadFile("src/html/createBook.html");
  bookWindow.on("close", () => {
    bookWindow = null;
  });
}

function closeModalBook() {
  if (bookWindow && !bookWindow.isDestroyed()) {
    bookWindow.close();
  }
}

ipcMain.on("show-libros", () => {
  bookWindow === null && boWindow();
});

ipcMain.on("get-book", async (e, Book_Id) => {
  try {
    const response = await axios.get(`${apiUrl}/books/${Book_Id}`);
    const data = response.data;
    bookWindow === null && boWindow();
    bookWindow.webContents.on("did-finish-load", () => {
      bookWindow.webContents.send("set-book", JSON.stringify(data));
    });
  } catch (error) {
    alert("Hubo un error al obtener el libro.", error);
  }
});

module.exports = { bookWindow, closeModalBook };
