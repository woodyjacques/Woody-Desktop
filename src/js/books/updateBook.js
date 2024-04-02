async function update_book(Book_Id) {
  ipcRenderer.send("get-book", Book_Id);
}

let Cate;

ipcRenderer.on("set-book", (e, data) => {
  const libro = JSON.parse(data);
  $nameBook.value = libro.name;
  $descriptionBook.value = libro.description;
  $priceBook.value = libro.price;
  $linkCompraBook.value = libro.linkCompra;
  $linkLeerBook.value = libro.linkLeer;
  $linkEscucharBook.value = libro.linkEscuchar;
  $linkImagenBook.value = libro.linkImagen;
  bookId = libro.id;
  updateStatusBooks = true;

});



