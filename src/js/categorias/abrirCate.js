document.addEventListener("DOMContentLoaded", function () {
    var categoriasLink = document.getElementById("categorias-link");
    if (categoriasLink) {
      categoriasLink.addEventListener("click", function (event) {
        event.preventDefault();
        createCategorias();
      });
    }
  });
  
  function createCategorias() {
    $content.innerHTML = `
    <div class="p-4 mt-14">
      <div class="custom-container">
        <p class="custom-paragraph">Categorías</p>
        <form class="custom-form">
          <div class="custom-relative">
          <input
          type="search"
          id="busquedaCategoria"
          class="custom-input"
          placeholder="Buscar una categoria"
        />
          </div>
        </form>
        <button class="botonCate custom-button">Agregar</button>
      </div>
  
      <div class="custom-table-container">
        <table class="custom-table">
          <thead>
            <tr>
              <th scope="col" class="custom-table-header">Nombre</th>
              <th scope="col" class="custom-table-header">Descripción</th>
              <th scope="col" class="custom-table-header">Acción</th>
            </tr>
          </thead>
          <tbody id="categories">
          <tr class="custom-table-row">
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
  
    const $botonCategorias = document.querySelector(".botonCate");
    $botonCategorias.addEventListener("click", showCategorias);
  
    $categorias = document.querySelector("#categories");
    ipcRenderer.send("request-all-categories");
  
    const $buscadorCate = document.querySelector("#busquedaCategoria");
    $buscadorCate.addEventListener("input", filtrarCategoria);
  }
  