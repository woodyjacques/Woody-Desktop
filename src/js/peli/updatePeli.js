async function update_peli(Peli_Id) {
  console.log(Peli_Id);
  ipcRenderer.send("get-peli", Peli_Id);
}

ipcRenderer.on("set-peli", (e, data) => {
  const peli = JSON.parse(data);
  $namePeli.value = peli.name;
  $descriptionPeli.value = peli.description;
  $linkVerPeli.value = peli.linkVer;
  $linkTrailerPeli.value = peli.linkTrailer;
  $linkImagenPeli.value = peli.linkImagen;
  peliId = peli.id;
  updateStatusPelis = true;
});



