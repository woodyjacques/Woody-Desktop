const { BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const axios = require("axios");
const { apiUrl } = require("./api");

let categoriaWindow = null;
function catWindow() {
  categoriaWindow = new BrowserWindow({
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
  // categoriaWindow.setMenu(null);
  categoriaWindow.loadFile("src/html/createCateg.html");
  categoriaWindow.on("close", () => {
    categoriaWindow = null;
  });
}

function closeModalCat() {
  if (categoriaWindow && !categoriaWindow.isDestroyed()) {
    categoriaWindow.close();
  }
}

ipcMain.on("show-categorias", () => {
  categoriaWindow === null && catWindow();
});

ipcMain.on("get-Cate", async (e, Cate_Id) => {
  try {
    const response = await axios.get(`${apiUrl}/categories/${Cate_Id}`);
    const data = response.data;
    categoriaWindow === null && catWindow();
    categoriaWindow.webContents.on("did-finish-load", () => {
      categoriaWindow.webContents.send("set-cate", JSON.stringify(data));
    });
  } catch (error) {
    alert("Hubo un error al obtener las categorias.", error);
  }
});

module.exports = { categoriaWindow, closeModalCat };
