ipcRenderer.on("Nuevos-Clientes", (e, results) => {
  try {
    $clients.innerHTML = "";
    JSON.parse(results).length === 0
      ? ($clients.innerHTML = `
        <td colspan="8" class="custom-table-cell">
        <div class="flex justify-center items-center h-full">
          <p class="text-xl text-gray-500">
            No hay clientes disponibles en este momento.
          </p>
        </div>
      </td>`)
      : JSON.parse(results).map((cli) => {
        $clients.innerHTML += cardClient(cli);
      });
  } catch (error) {
    alert("Hubo un error al mostrar los clientes.");
  }
});

function cardClient(cliente) {

  return `
        <td class="custom-table-cell">${cliente.name}</td>
        <td class="custom-table-cell">${cliente.email}</td>
      `;
}
