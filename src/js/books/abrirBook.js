document.addEventListener("DOMContentLoaded", function () {
    var clientesLink = document.getElementById("books-link");
    if (clientesLink) {
        clientesLink.addEventListener("click", function (event) {
            event.preventDefault();
            createBooks();
        });
    }
});

function createBooks() {
    $content.innerHTML = `
    <div class="p-4 mt-14">
      <div class="custom-container">
        <p class="custom-paragraph">Libros</p>
        <form class="custom-form">
          <div class="custom-relative">
          <input
          type="search"
          id="busquedaLibro"
          class="custom-input"
          placeholder="Buscar un libro"
        />
          </div>
        </form>
        <button class="botonLibro custom-button">Agregar</button>
      </div>
  
      <div class="custom-table-container">
        <table class="custom-table">
          <thead>
            <tr>
              <th scope="col" class="custom-table-header">Imagen</th>
              <th scope="col" class="custom-table-header">Nombre</th>
              <th scope="col" class="custom-table-header">Categoría</th>
              <th scope="col" class="custom-table-header">Descripcion</th>
              <th scope="col" class="custom-table-header">Precio</th>
              <th scope="col" class="custom-table-header">Compra</th>
              <th scope="col" class="custom-table-header">Leer</th>
              <th scope="col" class="custom-table-header">Escuchar</th>
              <th scope="col" class="custom-table-header">Acción</th>
            </tr>
          </thead>
          <tbody id="books">
          <tr class="custom-table-row">
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

    $books = document.querySelector("#books");
    ipcRenderer.send("request-all-books");

    const $botonLibro = document.querySelector(".botonLibro");
    $botonLibro.addEventListener("click", showLibros);

    const $buscadorBooks = document.querySelector("#busquedaLibro");
    $buscadorBooks.addEventListener("input", filtrarBooks);
}
