
function filtrarClientes() {
    const $tableBody = document.querySelector("#clients");
    const $rows = $tableBody.querySelectorAll("tr");
    const $buscadorCli = document.querySelector("#busquedaCliente");
    const textoBusqueda = $buscadorCli.value.toLowerCase();
  
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
  