function filtrarPeli() {
    const $tableBody = document.querySelector("#pelis");
    const $rows = $tableBody.querySelectorAll("tr");
    const $buscadorPeli = document.querySelector("#busquedaPeli");
    const textoBusqueda = $buscadorPeli.value.toLowerCase();
  
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
  