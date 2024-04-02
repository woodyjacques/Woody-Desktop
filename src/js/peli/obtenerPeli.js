ipcRenderer.on("Nueva-Peli", (e, results) => {
    try {
        $pelis.innerHTML = "";
        JSON.parse(results).length === 0
            ? ($pelis.innerHTML = `
        <td colspan="8" class="custom-table-cell">
        <div class="flex justify-center items-center h-full">
          <p class="text-xl text-gray-500">
            No hay películas disponibles en este momento.
          </p>
        </div>
      </td>`)
            : JSON.parse(results).map((peli) => {
                $pelis.innerHTML += cardpelis(peli);
            });
    } catch (error) {
        console.log(error, "error");
        alert("Hubo un error al mostrar las películas.");
    }
});

function cardpelis(peli) {
    return `
        <td class="custom-table-cell"><img class="imagenes" src="${peli.linkImagen}" alt=""></td>
        <td class="custom-table-cell">${peli.name}</td>
        <td class="custom-table-cell">${peli.categories}</td>
        <td class="custom-table-cell">${truncateDescription(
        peli.description, 30)}</td>
        <td class="custom-table-cell">${truncateDescription(
          peli.linkVer, 30)}</td>
        <td class="custom-table-cell">${truncateDescription(
          peli.linkTrailer, 30)}</td>
        <td class="custom-table-cell">
          <a class="custom-link" onclick="update_peli('${peli.id
        }')">Actualizar</a>
          <a class="custom-link2" onclick="delete_peli('${peli.id
        }')">Eliminar</a>
        </td>
      `;
}


