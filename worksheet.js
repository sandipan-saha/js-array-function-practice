const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

let elements = "";

//***FILTER***
//1. Get characters with mass greater than 100
function greaterMass() {
  const massGreater100 = characters.filter((character) => character.mass > 100);
  massGreater100.forEach((char) => (elements += "<li>" + char.name + "</li>"));
  document.getElementById("mg100").innerHTML = elements;
  document.getElementById("mg100").outerHTML = document.getElementById("mg100").outerHTML + "<br/>";
  elements = "";
}
greaterMass();

//2. Get characters with height less than 200
function lesserHeight() {
  const heightLesser200 = characters.filter((character) => character.height < 200);
  heightLesser200.map((char) => (elements += "<li>" + char.name + "</li>"));
  document.getElementById("hl200").innerHTML = elements;
  document.getElementById("hl200").outerHTML = document.getElementById("hl200").outerHTML + "<br/>";
  elements = "";
}
lesserHeight();

//3. Get all male characters
function male() {
  const allMale = characters.filter((character) => character.gender === "male");
  allMale.forEach((char) => (elements += "<li>" + char.name + "</li>"));
  document.getElementById("allm").innerHTML = elements;
  document.getElementById("allm").outerHTML = document.getElementById("allm").outerHTML + "<br/>";
  elements = "";
}
male();

//4. Get all female characters
function female() {
  const allFemale = characters.filter((character) => character.gender === "female");
  allFemale.forEach((char) => (elements += "<li>" + char.name + "</li>"));
  document.getElementById("allfm").innerHTML = elements;
  document.getElementById("allfm").outerHTML = document.getElementById("allfm").outerHTML + "<br/>";
}
female();

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
