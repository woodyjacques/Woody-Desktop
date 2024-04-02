async function update_cate(Cate_Id) {
    ipcRenderer.send("get-Cate", Cate_Id);
  }
  
  ipcRenderer.on("set-cate", (e, data) => {
    const categoria = JSON.parse(data);
    $nameCate.value = categoria.name;
    $descriptionCate.value = categoria.description;
    cateId = categoria.id;
    updateStatusCategorias = true;
  });
  