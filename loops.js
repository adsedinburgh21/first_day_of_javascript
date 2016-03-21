var pets = ["dog", "cat", "pika"];

for (var i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
//// remember the var before the individual part of the loop, eg. i.
//// Parameters are expecting 3 arguments - 3 parts to for loop: counter, number of times to loop, way to increment

for ( var pet of pets) {
  console.log(pet);
}

var students = {
  student1: "Alison",
  student2: "Claire",
  student3: "Alasdair"
}
for (var property in students) {
  console.log(students[property]);
}


var x = 0;
while(x < 10) {
  console.log(x);
  x++;
}
//// The counter is outside (before) of the parameters and the incrementation is after the parameters. the parameters are only expecting 1 argument in a while loop. This is different to the for loop which is expecting 3 arguments in the parameters.