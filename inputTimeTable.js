/*window.onload = function (){
  function setLocalStorage(){
    var subject = [];
    var professor= [];
    var time1 = [];
    var time2 = [];

    subject = localStorage.getItem('subject');
    professor = localStorage.getItem('professor');
    time1 = localStorage.getItem('time1');
    time2 = localStorage.getItem('time2');

    subject.push(document.getElementById("subject").value);
    professor.push(document.getElementById("professor").value);
    time1.push(document.getElementById("time1").value);
    time2.push(document.getElementById("time2").value);

    localStorage.setItem('subject', document.getElementById("subject").value);
    localStorage.setItem('professor', document.getElementById("professor").value);
    localStorage.setItem('time1', document.getElementById("time1").value);
    localStorage.setItem('time2', document.getElementById("time2").value);
    loaclStorage.setItem('dayOfWeek', document.getElementById("dayOfWeek").value);
    location.href="./main.html";
  }
  document.getElementById("button").onclick = setLocalStorage;
}

function getLocalSotrageData(key){
  return localStorage.getItem(key);
}*/
window.onload = function(){
  function getValueById(id){
    return document.getElementById(id).value;
  };

  function addEntry() {
      // Parse any JSON previously stored in allEntries
      var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
      if(existingEntries == null) existingEntries = [];
      var entry = {
          "subject": getValueById("subject"),
          "professor": getValueById("professor"),
          "dayOfWeek": getValueById("dayOfWeek"),
          "time1":getValueById("time1"),
          "time2":getValueById("time2")
      };
      localStorage.setItem("entry", JSON.stringify(entry));
      // Save allEntries back to local storage
      existingEntries.push(entry);
      localStorage.setItem("allEntries", JSON.stringify(existingEntries));
      location.href="./main.html";
  };
  
  document.getElementById("button").onclick = addEntry;
}
