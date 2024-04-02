
if ($formBook) {
    $formBook.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameBook = $nameBook.value;
        const categoriesBook = $categoriesBook.value;
        const descriptionBook = $descriptionBook.value;
        const priceBook = $priceBook.value;
        const linkCompraBook = $linkCompraBook.value;
        const linkLeerBook = $linkLeerBook.value;
        const linkEscucharBook = $linkEscucharBook.value;
        const linkImagenBook = $linkImagenBook.value;

        if (!updateStatusBooks) {
            enviarBook(
                bookId,
                nameBook,
                categoriesBook,
                descriptionBook,
                priceBook,
                linkCompraBook,
                linkLeerBook,
                linkEscucharBook,
                linkImagenBook
            );
        } else {
            enviarBook(
                bookId,
                nameBook,
                categoriesBook,
                descriptionBook,
                priceBook,
                linkCompraBook,
                linkLeerBook,
                linkEscucharBook,
                linkImagenBook
            );
        }

    });
}

async function enviarBook( bookId, nameBook, categoriesBook, descriptionBook,
    priceBook, linkCompraBook, linkLeerBook, linkEscucharBook, linkImagenBook) {

    const dataBooks = {
        name: String(nameBook),
        categories:  String(categoriesBook),
        description: String(descriptionBook),
        price: String(priceBook),
        linkCompra: String(linkCompraBook),
        linkLeer: String(linkLeerBook),
        linkEscuchar: String(linkEscucharBook),
        linkImagen: String(linkImagenBook),
    };

    sendBookes(dataBooks, bookId);
}

async function sendBookes(dataBooks, CateId) {

    const $enviandoButton = document.querySelector(".hidden.boton-form");
    const $enviarButton = document.querySelector("button[type='submit']");

    $enviandoButton.classList.remove("hidden");
    $enviarButton.classList.add("hidden");

    const method = CateId === null ? "POST" : "PATCH";
    const url =
        CateId === null ? `${apiUrl}/books` : `${apiUrl}/books/${CateId}`;
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataBooks),
    };

    try {
        const response = await fetch(url, config);
        if (response.status === 409) {
            alert(
                CateId === null
                    ? "Este libro ya ha sido creado."
                    : "Este libro no existe."
            );
        } else {
            alert(
                CateId === null
                    ? "Libro enviado correctamente."
                    : "Libro actualizado correctamente."
            );
            ipcRenderer.send("show-libro-cerrado");
        }
    } catch (error) {
        alert("Hubo un error al enviar el libro.", error);
    } finally {
        $enviandoButton.classList.add("hidden");
        $enviarButton.classList.remove("hidden");
    }
}
