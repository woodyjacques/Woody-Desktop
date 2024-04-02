function delete_peli(Peli_Id) {
    if (confirm("¿Estás seguro de eliminar la película?")) {
      axios
        .delete(`${apiUrl}/peli/${Peli_Id}`)
        .then((response) => {
          alert("Película eliminado correctamente.");
          ipcRenderer.send("peli-eliminado");
        })
        .catch((error) => {
          alert("Hubo un error al eliminar la película.");
        });
    }
  }
  