const { BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const axios = require("axios");
const { apiUrl } = require("./api");

let peliWindow = null;
function peWindow() {
  peliWindow = new BrowserWindow({
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
  // peliWindow.setMenu(null);
  peliWindow.loadFile("src/html/createPeli.html");
  peliWindow.on("close", () => {
    peliWindow = null;
  });
}

function closeModalPeli() {
  if (peliWindow && !peliWindow.isDestroyed()) {
    peliWindow.close();
  }
}

ipcMain.on("show-peli", () => {
  peliWindow === null && peWindow();
});

ipcMain.on("get-peli", async (e, Peli_Id) => {
  try {
    const response = await axios.get(`${apiUrl}/peli/${Peli_Id}`);
    const data = response.data;
    peliWindow === null && peWindow();
    peliWindow.webContents.on("did-finish-load", () => {
      peliWindow.webContents.send("set-peli", JSON.stringify(data));
    });
  } catch (error) {
    alert("Hubo un error al obtener la película.", error);
  }
});

module.exports = { peliWindow, closeModalPeli };
