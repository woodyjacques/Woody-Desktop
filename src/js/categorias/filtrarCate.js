function filtrarCategoria() {
    const $tableBody = document.querySelector("#categories");
    const $rows = $tableBody.querySelectorAll("tr");
    const $buscadorCate = document.querySelector("#busquedaCategoria");
    const textoBusqueda = $buscadorCate.value.toLowerCase();
  
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
  