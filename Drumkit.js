var sounds = document.getElementsByClassName("sounds");
var settings = document.getElementsByClassName("settings");
var a1 = document.getElementById("drum1");
var a2 = document.getElementById("drum2");
var a3 = document.getElementById("drum3");
var a4 = document.getElementById("drum4");
var b1 = document.getElementById("thimble1");
var b2 = document.getElementById("thimble2");
var b3 = document.getElementById("thimble3");
var b4 = document.getElementById("thimble4");
var db = document.getElementById("basedrum");
// var d1 = new Audio("Funnysounds/Duck.wav");
// var d2 = new Audio("Funnysounds/Pig.wav");
// var d3 = new Audio("Funnysounds/Dog.wav");
// var d4 = new Audio("Funnysounds/Cat.wav");
// var t1 = new Audio("Funnysounds/Cow.wav");
// var t2 = new Audio("Funnysounds/Horse.wav");
// var t3 = new Audio("Funnysounds/Elephant.wav");
// var t4 = new Audio("Funnysounds/Sheep.wav");
// var bd = new Audio("Funnysounds/Bird.wav");

var d1 = new Audio("Music/Drum1.wav");
var d2 = new Audio("Music/Drum2.wav");
var d3 = new Audio("Music/Drum3.wav");
var d4 = new Audio("Music/Drum4.mp3");
var t1 = new Audio("Music/Thimble1.wav");
var t2 = new Audio("Music/Thimble2.wav");
var t3 = new Audio("Music/Thimble3.wav");
var t4 = new Audio("Music/Thimble4.wav");
var bd = new Audio("Music/Base.mp3");

for (var i = 0; i < sounds.length; i++) {
  var sounder = sounds[i];
  sounder.onmousedown = function() {
    this.style.backgroundColor = "white";
    if(this.id == "drum1") {
      d1.play();
    }
    if(this.id == "drum2") {
      d2.play();
    }
    if(this.id == "drum3") {
      d3.play();
    }
    if(this.id == "drum4") {
      d4.play();
    }
    if(this.id == "thimble1") {
      t1.play();
    }
    if(this.id == "thimble2") {
      t2.play();
    }
    if(this.id == "thimble3") {
      t3.play();
    }
    if(this.id == "thimble4") {
      t4.play();
    }

    if(this.id == "basedrum") {
      bd.play();
    }

  }
  sounder.onmouseup = function() {
    this.style.backgroundColor = "transparent";
  }
 sounder.onmouseover = function() {
    this.style.backgroundColor = "yellow";
  }
  sounder.onmouseout = function() {
    this.style.backgroundColor = "transparent";
  }
}

for (var i = 0; i < settings.length; i++) {
  var tool = settings[i];
  tool.onmousedown = function() {
    this.style.backgroundColor = "blue";
    this.style.opacity = "0.5";
    if (this.id == "record") {
      console.log("record");
    }
    if (this.id == "play") {
      console.log("play");
    }
    if (this.id == "reset") {
      console.log("reset");
    }
    if (this.id == "options") {
      console.log("options");
    }
  }
  tool.onmouseup = function() {
    this.style.backgroundColor = "transparent";
  }
}

window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keyup", checkKeyUp, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "65") {
      d1.play();
      a1.style.backgroundColor = "white";
    }
    if (evt.keyCode == "83") {
      d2.play();
      a2.style.backgroundColor = "white";
    }
    if (evt.keyCode == "68") {
      d3.play();
      a3.style.backgroundColor = "white";
    }
    if (evt.keyCode == "70") {
      d4.play();
      a4.style.backgroundColor = "white";
    }
    if (evt.keyCode == "81") {
      t1.play();
      b1.style.backgroundColor = "white";
    }
    if (evt.keyCode == "87") {
      t2.play();
      b2.style.backgroundColor = "white";
    }
    if (evt.keyCode == "69") {
      t3.play();
      b3.style.backgroundColor = "white";
    }
    if (evt.keyCode == "82") {
      t4.play();
      b4.style.backgroundColor = "white";
    }
    if (evt.keyCode == "32") {
      bd.play();
      db.style.backgroundColor = "white";
    }

}
function checkKeyUp(evt) {
  if (evt.keyCode == "65") {
    a1.style.backgroundColor = "transparent";
  }
  if (evt.keyCode == "83") {
    a2.style.backgroundColor = "transparent";
  }
  if (evt.keyCode == "68") {
    a3.style.backgroundColor = "transparent";
  }
  if (evt.keyCode == "70") {
    a4.style.backgroundColor = "transparent";
  }
  if (evt.keyCode == "81") {
    b1.style.backgroundColor = "transparent";
  }
  if (evt.keyCode == "87") {
    b2.style.backgroundColor = "transparent";
  }
  if (evt.keyCode == "69") {
    b3.style.backgroundColor = "transparent";
  }
  if (evt.keyCode == "82") {
    b4.style.backgroundColor = "transparent";
  }
  if (evt.keyCode == "32") {
    db.style.backgroundColor = "transparent";
  }
}