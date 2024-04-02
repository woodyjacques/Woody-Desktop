
if ($formPeli) {
    $formPeli.addEventListener("submit", (e) => {
        e.preventDefault();

        const namePeli = $namePeli.value;
        const categoriesPeli = $categoriesPeli.value;
        const descriptionPeli = $descriptionPeli.value;
        const linkVerPeli = $linkVerPeli.value;
        const linkTrailerPeli = $linkTrailerPeli.value;
        const linkImagenPeli = $linkImagenPeli.value;

        if (!updateStatusPelis) {
            enviarPeli(
                peliId,
                namePeli,
                categoriesPeli,
                descriptionPeli,
                linkVerPeli,
                linkTrailerPeli,
                linkImagenPeli,
            );
        } else {
            enviarPeli(
                peliId,
                namePeli,
                categoriesPeli,
                descriptionPeli,
                linkVerPeli,
                linkTrailerPeli,
                linkImagenPeli,
            );
        }

    });
}

async function enviarPeli(peliId, namePeli, categoriesPeli, descriptionPeli,
    linkVerPeli, linkTrailerPeli, linkImagenPeli) {

    const dataPelis = {
        name: String(namePeli),
        categories: String(categoriesPeli),
        description: String(descriptionPeli),
        linkVer: String(linkVerPeli),
        linkTrailer: String(linkTrailerPeli),
        linkImagen: String(linkImagenPeli)
    };

    sendPelis(dataPelis, peliId);
}

async function sendPelis(dataPelis, peliId) {

    const $enviandoButton = document.querySelector(".hidden.boton-form");
    const $enviarButton = document.querySelector("button[type='submit']");

    $enviandoButton.classList.remove("hidden");
    $enviarButton.classList.add("hidden");

    const method = peliId === null ? "POST" : "PATCH";
    const url =
        peliId === null ? `${apiUrl}/peli` : `${apiUrl}/peli/${peliId}`;
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataPelis),
    };

    try {
        const response = await fetch(url, config);
        if (response.status === 409) {
            alert(
                peliId === null
                    ? "Esta película ya ha sido creado."
                    : "Esta película no existe."
            );
        } else {
            alert(
                peliId === null
                    ? "Película enviado correctamente."
                    : "Película actualizado correctamente."
            );
            ipcRenderer.send("show-peli-cerrado");
        }
    } catch (error) {
        alert("Hubo un error al enviar la película.", error);
    } finally {
        $enviandoButton.classList.add("hidden");
        $enviarButton.classList.remove("hidden");
    }
}
