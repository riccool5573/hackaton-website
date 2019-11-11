function myFunction() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value;
      if (text == "Goofy86Peeters"){
          console.log("got here");
          window.location.href = "logged.html";
      }
      else {
          console.log("something is wrong");
        console.log(text);
      }
    }
    document.getElementById("demo").innerHTML = text;
  }