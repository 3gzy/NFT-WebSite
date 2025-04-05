if (document.querySelector("#drop-zone")) {
    const dropZone = document.getElementById("drop-zone");
    const fileInput = document.getElementById("file-input");
    const dataDisplay = document.querySelector("[data-for-dropzone]");
  
    function handleDrop(e) {
      e.preventDefault();
      dropZone.classList.remove("hover");
  
      const files = e.dataTransfer.files;
      if (files.length) {
        fileInput.files = files;
        updateThumbnail(files[0]);
      }
    }
  
    function handleDragOver(e) {
      e.preventDefault();
      dropZone.classList.add("hover");
    }
  
    function handleDragLeave() {
      dropZone.classList.remove("hover");
    }
  
    function updateThumbnail(file) {
      dataDisplay.innerHTML += `<p>${file.name}</p>`;
    }
  
    dropZone.addEventListener("dragover", handleDragOver);
    dropZone.addEventListener("dragleave", handleDragLeave);
    dropZone.addEventListener("drop", handleDrop);
  
    fileInput.addEventListener("change", function () {
      if (this.files.length) {
        updateThumbnail(this.files[0]);
      }
    });
  }
  