//Variables
var txt;
let allPeople = [];
let matches;

function preload() {
  txt = loadStrings("people.in", fileloaded);
}

function findMatches(wordToMatch, allPeople) {
  return allPeople.filter(role => {
    const regex = new RegExp(wordToMatch, "gi");
    return role.match(regex);
  });
}

function fileloaded(data) {
  allPeople = data;
  matches = findMatches("programmer", allPeople);
  console.log(matches);
  return matches;
}

function save_it() {
  save(matches, "people", "out");
}

function setup() {
  noCanvas();
  save_it();
}