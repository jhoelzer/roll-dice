const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const results = [];
function rollOne() {
    // need the + 1 because this starts at 0, so now it can go from 1-6 instead of 0-5
    return Math.floor(((Math.random() * 6) + 1));
}
function rollTwo() {
    return rollOne() + rollOne()
    // have it be plus 2 because it needs to start at 2 since youre adding 2 die together
    // actually, dont do this because this is more like rolling a 12-sided die instead of 2 sixsided die, so change to use rollone
    // return Math.floor(((Math.random() * 11) + 2));
}
function diceValues() {
    for (var i = 1; i <= 1000; i++) {
        count[rollTwo()]++;
    }
}
function totalResults() {
    for(let i = 2; i <=12; i++) {
        let span = document.createElement("div");
        let text = document.createTextNode(i + ": " + count[i]);
        span.appendChild(text);
        let placeHere = document.getElementById("results");
        placeHere.appendChild(span);
    }
}
diceValues();
totalResults();
console.log(results);
console.log(count);
let span = document.createElement("span");
let text = document.createTextNode(results);
span.appendChild(text);
let placeHere = document.getElementById("results");
placeHere.appendChild(span);

for(i = 0; i <= 12; i++){
    let rect = document.createElement("div");
    let width = (count[i]) + "px";
    rect.style.marginBottom = 2 + "px";
    rect.style.height = 20 + "px";
    rect.style.width = width;
    rect.style.backgroundColor = "#3195c4";
    var destination = document.getElementById("results");
    destination.appendChild(rect);
}