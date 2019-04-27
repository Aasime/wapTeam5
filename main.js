window.onload = function() {
  var setClassContentBox = document.getElementById("setClassContentBox");
  var iframeContent = document.setClassContent.document;

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

  function getValueById(id) {
    return iframeContent.getElementById(id).value;
  }

  function addEntry() {
    // Parse any JSON previously stored in allEntries
    // console.log(localStorage.getItem("allEntries"));
    var existingEntries = localStorage.getItem("allEntries");

    if (existingEntries == "") existingEntries = [];
    else existingEntries = JSON.parse(existingEntries);

    var entry = {
      subject: getValueById("subject"),
      professor: getValueById("professor"),
      dayOfWeek: getValueById("dayOfWeek"),
      time1: getValueById("time1"),
      time2: getValueById("time2")
    };

    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    exitSetClassPage();
  }

  document.getElementById("addClassButton").onclick = getSetClassPage;
  iframeContent.getElementById("exitButton").onclick = exitSetClassPage;
  iframeContent.getElementById("button").onclick = addEntry;
};
