
if ($formCate) {
  $formCate.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = $nameCate.value;
    const description = $descriptionCate.value;

    if (!updateStatusCategorias) {
      enviarCategoria(
        cateId,
        name,
        description,
      );
    } else {
      enviarCategoria(
        cateId,
        name,
        description,
      );
    }

  });
}

async function enviarCategoria(CateId, name, description) {
  const dataCategories = {
    name: String(name),
    description: String(description),
  };

  sendCategories(dataCategories, CateId);
}

async function sendCategories(dataCategories, CateId) {

  const $enviandoButton = document.querySelector(".hidden.boton-form");
  const $enviarButton = document.querySelector("button[type='submit']");

  $enviandoButton.classList.remove("hidden");
  $enviarButton.classList.add("hidden");

  const method = CateId === null ? "POST" : "PATCH";
  const url =
    CateId === null ? `${apiUrl}/categories` : `${apiUrl}/categories/${CateId}`;
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(dataCategories),
  };

  try {
    const response = await fetch(url, config);
    if (response.status === 409) {
      alert(
        CateId === null
          ? "Esta categoría ya ha sido creado."
          : "Este categoría no existe."
      );
    } else {
      alert(
        CateId === null
          ? "Categoría enviado correctamente."
          : "Categoría actualizado correctamente."
      );
      ipcRenderer.send("show-categoria-cerrado");
    }
  } catch (error) {
    alert("Hubo un error al enviar la categoría.", error);
  } finally {
    $enviandoButton.classList.add("hidden");
    $enviarButton.classList.remove("hidden");
  }
}
