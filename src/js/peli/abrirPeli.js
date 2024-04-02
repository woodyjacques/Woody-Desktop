document.addEventListener("DOMContentLoaded", function () {
  var peliLink = document.getElementById("peli-link");
  if (peliLink) {
    peliLink.addEventListener("click", function (event) {
      event.preventDefault();
      createPeli();
    });
  }
});

function createPeli() {
  $content.innerHTML = `
    <div class="p-4 mt-14">
      <div class="custom-container">
        <p class="custom-paragraph">Películas</p>
        <form class="custom-form">
          <div class="custom-relative">
          <input
          type="search"
          id="busquedaPeli"
          class="custom-input"
          placeholder="Buscar una película"
        />
          </div>
        </form>
        <button class="botonPeli custom-button">Agregar</button>
      </div>
  
      <div class="custom-table-container">
        <table class="custom-table">
          <thead>
            <tr>
              <th scope="col" class="custom-table-header">Imagen</th>
              <th scope="col" class="custom-table-header">Nombre</th>
              <th scope="col" class="custom-table-header">Categoría</th>
              <th scope="col" class="custom-table-header">Descripcion</th>
              <th scope="col" class="custom-table-header">Ver</th>
              <th scope="col" class="custom-table-header">Trailer</th>
              <th scope="col" class="custom-table-header">Acción</th>
            </tr>
          </thead>
          <tbody id="pelicula">
          <tr class="custom-table-row">
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  $pelis = document.querySelector("#pelicula");
  ipcRenderer.send("request-all-peli");

  const $botonPeli = document.querySelector(".botonPeli");
  $botonPeli.addEventListener("click", showPeli);

  const $buscadorPeli = document.querySelector("#busquedaPeli");
  $buscadorPeli.addEventListener("input", filtrarPeli);
}
