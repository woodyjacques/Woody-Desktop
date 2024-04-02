ipcRenderer.on("Nueva-Categoria", (e, results) => {
  try {
    $categorias.innerHTML = "";
    JSON.parse(results).length === 0
      ? ($categorias.innerHTML = `
        <td colspan="8" class="custom-table-cell">
        <div class="flex justify-center items-center h-full">
          <p class="text-xl text-gray-500">
            No hay categorías disponibles en este momento.
          </p>
        </div>
      </td>`)
      : JSON.parse(results).map((cate) => {
        $categorias.innerHTML += cardCategory(cate);
      });
  } catch (error) {
    console.log(error, "error");
    alert("Hubo un error al mostrar las categorías.");
  }
});

function cardCategory(categoria) {
  return `
        <td class="custom-table-cell">${categoria.name}</td>
        <td class="custom-table-cell">${truncateDescription(
    categoria.description, 50)}</td>
        <td class="custom-table-cell">
          <a class="custom-link" onclick="update_cate('${categoria.id
    }')">Actualizar</a>
          <a class="custom-link2" onclick="delete_cate('${categoria.id
    }')">Eliminar</a>
        </td>
      `;
}

async function obtenerCategorias() {
  const url = `${apiUrl}/categories`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (Array.isArray(data)) {
      return data;
    } else {
      console.error('La respuesta del servidor no es un array de categorías:', data);
      return [];
    }
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
    return [];
  }
}

async function llenarSelectCategorias() {

  const $select = document.getElementById('categories');
  $select.innerHTML = '<option value="">Seleccione una categoría</option>';

  const categorias = await obtenerCategorias();

  categorias.forEach((categoria) => {
    const option = document.createElement('option');
    option.value = categoria.name;
    option.text = categoria.name;
    $select.appendChild(option);
  });


}

llenarSelectCategorias();

