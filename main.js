window.onload = function() {
  function getSetClassPage() {
    console.log("click");
    var setClassContent = document.getElementById("setClassContent");
    setClassContent.src = "./inputTimeTable.html";
  }

  document.getElementById("addClass").onclick = getSetClassPage;
};
