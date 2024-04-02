ipcRenderer.on("Nueva-Books", (e, results) => {
    try {
        $books.innerHTML = "";
        JSON.parse(results).length === 0
            ? ($books.innerHTML = `
        <td colspan="8" class="custom-table-cell">
        <div class="flex justify-center items-center h-full">
          <p class="text-xl text-gray-500">
            No hay libros disponibles en este momento.
          </p>
        </div>
      </td>`)
            : JSON.parse(results).map((book) => {
                $books.innerHTML += cardBooks(book);
            });
    } catch (error) {
        console.log(error, "error");
        alert("Hubo un error al mostrar los libros.");
    }
});

function cardBooks(book) {
    return `
        <td class="custom-table-cell"><img class="imagenes" src="${book.linkImagen}" alt=""></td>
        <td class="custom-table-cell">${book.name}</td>
        <td class="custom-table-cell">${book.categories}</td>
        <td class="custom-table-cell">${truncateDescription(
        book.description, 30)}</td>
        <td class="custom-table-cell">${book.price}</td>
        <td class="custom-table-cell">${truncateDescription(
          book.linkCompra, 30)}</td>
        <td class="custom-table-cell">${truncateDescription(
          book.linkLeer, 30)}</td>
        <td class="custom-table-cell">${truncateDescription(
          book.linkEscuchar, 30)}</td>
        <td class="custom-table-cell">
          <a class="custom-link" onclick="update_book('${book.id
        }')">Actualizar</a>
          <a class="custom-link2" onclick="delete_book('${book.id
        }')">Eliminar</a>
        </td>
      `;
}


