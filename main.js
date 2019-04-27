window.onload = function() {
  var setClassContentBox = document.getElementById("setClassContentBox");
  var exitButton = document.setClassContent;
  console.log(exitButton);
  exitSetClassPage();

  function getSetClassPage() {
    if (setClassContentBox.style.display == "none")
      setClassContentBox.style.display = "block";
    else exitSetClassPage();
  }

  function exitSetClassPage() {
    setClassContentBox.style.display = "none";
  }

  document.getElementById("addClassButton").onclick = getSetClassPage;
  exitButton.document.getElementById("exitButton").onclick = exitSetClassPage;
};
