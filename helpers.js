// do not modify this file, make all changes in sketch.js
var backgroundColor;
var firstName = "Shaan";
var cityName = "Hayward";
var hobby = "rap";
var food = "burgers";
var years = "1";
var catchphrase = "Lets get it!";

function helloHelper() {
  var x = width / 2;
  var y = 50;
  var size = 25;
  textAlign(CENTER);
  textSize(size);
  text(firstName + " is from " + cityName, x, y + size * 2);
  text("He likes to eat " + food, x, y + size * 4);
  text("and likes to " + hobby + ".", x, y + size * 5.5);
  text("He has programed", x, y + size * 7.5);
  text("for less than " + years + " year.", x, y + size * 9);
  text("He often says", x, y + size * 11);
  text("\"" + catchphrase + "\"", x, y + size * 12.5);
}

function mousePressed() {
  print(floor(mouseX) + ", " + floor(mouseY));
}