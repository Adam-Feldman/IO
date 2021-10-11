
function checkCreds() {
  alert("Checking credentials");


  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var badgeNumber = document.getElementById("badgeNumber").value;
  var name = firstName + " " + lastName;

  if (name.length >= 20) {
    // if the name has 20 or more characters.
    document.getElementById("loginStatus").innerHTML = "UserName has invalid number of characters!";

  }
  // if the badge has anything other than 3 numbers 
  else if (badgeNumber > 1000 || badgeNumber < 99) {
    document.getElementById("loginStatus").innerHTML = "Incorrect badge number!";

  }
  //All credentials are good, access granted
  else {
    alert("Access Granted, Welcome " + name + "!");
    location.replace("UAT Space Page with Table.html");
  }
}
//This is my on button that will be disabled when the off button is
function on() {
  document.getElementById("on").disabled = true;
  document.getElementById("off").disabled = false;
  document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
  document.getElementById("data").rows["longitude"].innerHTML = "Start pushed...";
}

function off() {
  document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td>";
  document.getElementById("data").rows["longitude"].innerHTML = "<td>Longitude:</td><td>0</td>";
  document.getElementById("on").disabled = false;
  document.getElementById("off").disabled = true;
}

function boards() {

  location.replace("objectives.html")


}



function playStation() {
  mySound = new sound("music/us-lab-background.mp3");
  mySound.play();
}

function playRhead() {
  mySound = new sound("music/08 Separator.mp3");
  mySound.play();
}

function playWho() {
  mySound = new sound("music/Eminence Front.mp3");
  mySound.play();
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.play = function () {
    this.sound.play();
  }
}
function playcraps() {
  console.log("craps started");

  var die1 = Math.ceil(Math.random() * 6);
  var die2 = Math.ceil(Math.random() * 6);

  var sum = die1 + die2
  document.getElementById("die1Dis").innerHTML = die1 // random roll of dice
  document.getElementById("die2Dis").innerHTML = die2 //random role of dice 
  document.getElementById("sumDis").innerHTML = sum

  if (sum == 7 || sum == 11) {
    document.getElementById("resultDis").innerHTML = "Craps-you lose" //This is a document that will display Craps-you lose if the dice land on 7 or 11
  }
  else if (die1 == die2 && die1 % 2 == 0) //if both of the dice land on the same number
  {
    document.getElementById("resultDis").innerHTML = "Doubles, you win!" // this is the document that displays Doubles you win
  }
  else { document.getElementById("resultDis").innerHTML = "You neither won nor lost.  Please play again"; } //If neither the doubles or 7/11 
}
