function delete_book(Book_Id) {
    if (confirm("¿Estás seguro de eliminar el libro?")) {
      axios
        .delete(`${apiUrl}/books/${Book_Id}`)
        .then((response) => {
          alert("Libro eliminado correctamente.");
          ipcRenderer.send("libro-eliminado");
        })
        .catch((error) => {
          alert("Hubo un error al eliminar el libro.");
        });
    }
  }
  