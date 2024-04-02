const axios = require("axios");
const { apiUrl } = require("./api");

async function requestAllCategorias(mainWindow) {
  try {
    const response = await axios.get(`${apiUrl}/Categories`);
    const data = response.data;
    mainWindow.webContents.send("Nueva-Categoria", JSON.stringify(data));
  } catch (error) {
    alert("Hubo un error al obtener las categorias");
  }
}

async function requestAllClientes(mainWindow) {
  try {
    const response = await axios.get(`${apiUrl}/Auth/Clients`);
    const data = response.data;
    mainWindow.webContents.send("Nuevos-Clientes", JSON.stringify(data));
  } catch (error) {
    alert("Hubo un error al obtener los cliente");
  }
}

async function requestAllBooks(mainWindow) {
  try {
    const response = await axios.get(`${apiUrl}/Books`);
    const data = response.data;
    mainWindow.webContents.send("Nueva-Books", JSON.stringify(data));
  } catch (error) {
    alert("Hubo un error al obtener los libros");
  }
}

async function requestAllPeli(mainWindow) {
  try {
    const response = await axios.get(`${apiUrl}/Peli`);
    const data = response.data;
    mainWindow.webContents.send("Nueva-Peli", JSON.stringify(data));
  } catch (error) {
    alert("Hubo un error al obtener las peliculas");
  }
}

module.exports = {
  requestAllCategorias,
  requestAllClientes,
  requestAllBooks,
  requestAllPeli
};
