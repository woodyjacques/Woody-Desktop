function delete_cate(Cate_Id) {
    if (confirm("¿Estás seguro de eliminar la categoría?")) {
      axios
        .delete(`${apiUrl}/categories/${Cate_Id}`)
        .then((response) => {
          alert("Categoría eliminado correctamente.");
          ipcRenderer.send("categoria-eliminado");
        })
        .catch((error) => {
          alert("Hubo un error al eliminar la categoría.");
        });
    }
  }
  