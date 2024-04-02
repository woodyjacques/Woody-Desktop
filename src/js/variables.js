const axios = require("axios");
const apiUrl = process.env.APIURL;
const { ipcRenderer } = require("electron");
const { ClientRequest } = require("http");

// Para categorias
let $categorias = null;
let updateStatusCategorias = false;
let cateId = null;
const $formCate = document.getElementById("form-cate");
const $nameCate = document.getElementById("name-cate");
const $descriptionCate = document.getElementById("description-cate");

function showCategorias() {
  ipcRenderer.send("show-categorias");
}

// Para el Cliente
let $clients = null;

// Para book
let $books = null;
let updateStatusBooks = false;
let bookId = null;
const $formBook = document.getElementById("form-book");
const $nameBook = document.getElementById("name-book");
const $categoriesBook = document.getElementById("categories");
const $descriptionBook = document.getElementById("description-book");
const $priceBook = document.getElementById("price-book");
const $linkCompraBook = document.getElementById("linkCompra-book");
const $linkLeerBook = document.getElementById("linkLeer-book");
const $linkEscucharBook = document.getElementById("linkEscuchar-book");
const $linkImagenBook = document.getElementById("linkImagen-book");


function showLibros() {
  ipcRenderer.send("show-libros");
}

// Para pelicula
let $pelis = null;
let updateStatusPelis = false;
let peliId = null;
const $formPeli = document.getElementById("form-peli");
const $namePeli = document.getElementById("name-peli");
const $categoriesPeli = document.getElementById("categories");
const $descriptionPeli = document.getElementById("description-peli");
const $linkVerPeli = document.getElementById("linkVer-peli");
const $linkTrailerPeli = document.getElementById("linkTrailer-peli");
const $linkImagenPeli = document.getElementById("linkImagen-peli");


function showPeli() {
  ipcRenderer.send("show-peli");
}

