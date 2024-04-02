function filtrarBooks() {
    const $tableBody = document.querySelector("#books");
    const $rows = $tableBody.querySelectorAll("tr");
    const $buscadorBook = document.querySelector("#busquedaLibro");
    const textoBusqueda = $buscadorBook.value.toLowerCase();
  
    $rows.forEach((row) => {
      let coincide = false;
      const $celdas = row.querySelectorAll("td");
      $celdas.forEach((celda) => {
        if (celda.textContent.toLowerCase().indexOf(textoBusqueda) !== -1) {
          coincide = true;
        }
      });
  
      if (coincide) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }
  