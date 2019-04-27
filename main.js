window.onload = function() {
  var setClassContentBox = document.getElementById("setClassContentBox");
  var exitButton = document.setClassContent;
  console.log(exitButton);
  exitSetClassPage();

  function getSetClassPage() {
    if (setClassContentBox.style.display == "none") {
      setClassContentBox.style.display = "block";
      setOpacity("header", 0.5);
      setOpacity("timeTable", 0.5);
    } else exitSetClassPage();
  }

  function exitSetClassPage() {
    setOpacity("header", 1);
    setOpacity("timeTable", 1);
    setClassContentBox.style.display = "none";
  }

  function setOpacity(id, value) {
    document.getElementById(id).style.opacity = value;
  }

  document.getElementById("addClassButton").onclick = getSetClassPage;
  exitButton.document.getElementById("exitButton").onclick = exitSetClassPage;
};
