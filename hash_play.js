var myPerson = {
  name: 'Guybrush',
  age: 32,
  weapon: {
    type: 'cutlass',
    metal: 'silver'
  },
  saying: 'cool'
};

console.log( 'my person', myPerson);

console.log( 'my person', myPerson["name"]);
console.log( 'my person', myPerson.name);
console.log( 'my age', myPerson.age );
console.log( 'my age', myPerson["age"]);
myPerson.name = "Adam";
myPerson["name"] = "Adam";

console.log(myPerson["name"])

myPerson.weapon.metal
