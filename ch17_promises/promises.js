document.getElementById("downloadBtn").addEventListener("click", function () {
  fetch("https://example.com/file.pdf")
    .then(function (response) {
      return response.blob();
    })
    .then(function (blob) {
      let url = `window.URL.createObjectURL(blob)`;

      let a = document.createElement("a");
      a.href = url;
      a.download = "file.pdf";

      document.body.appendChild(a);
      a.click();

      a.remove();
      `window.URL.revokeObjectURL(url);
    })
    .catch(function (error) {
      console.log("Download failed:", error);
    });
})
