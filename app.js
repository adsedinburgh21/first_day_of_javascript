var guitars = [ "fender", "gibson" ];
console.log("guitars: ", guitars);

var drums = [];

var drums = new Array();

drums.push("gretsch");
drums.push("cowbell");

console.log("drums: ", drums.length);

console.log(drums[1]);

drums[1] = "zildijan";

console.log("drums again: ", drums);

drums[10] = "ermahgerd boom"

console.log(typeof(drums[5]));

drums.push("mapex");

var removed = drums.shift();
console.log(removed);

var removedMore = drums.splice(0,1);
//// Splice always return an array.

var popped = drums.pop();

