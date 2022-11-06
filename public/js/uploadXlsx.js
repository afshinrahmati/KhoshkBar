async function handleFileSelect(evt) {
  let counter = 0;

  setInterval(function () {
    $("#progressBar").show();
    (function asyncLoop() {
      $("#progressBar").val(counter++);
      if (counter <= 100) {
        setTimeout(asyncLoop, 45);
      } else {
        document.getElementById("progressBar").style.backgroundColor = "red";
        $("#send").show();
      }
    })();
  }, 500);
}
