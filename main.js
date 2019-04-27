window.onload = function() {
  var setClassContentBox = document.getElementById("setClassContentBox");
  var exitButton = document.setClassContent;
  console.log(exitButton);
  exitSetClassPage();

  function getSetClassPage() {
    if (setClassContentBox.style.display == "none") {
      setClassContentBox.style.display = "block";
      document.body.style.opacity = 0.5;
    } else exitSetClassPage();
  }

  function exitSetClassPage() {
    document.body.style.opacity = 1;
    setClassContentBox.style.display = "none";
  }

  document.getElementById("addClassButton").onclick = getSetClassPage;
  exitButton.document.getElementById("exitButton").onclick = exitSetClassPage;
};
