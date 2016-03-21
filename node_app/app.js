// // Function
// function hello(name){
//   console.log(name + " you are awesome!");
// }

// hello("Keith");


//// Variable
// var myString = "something we want to hold on to";

// console.log(myString);


//// Number
// var a = 1;
// var b = 2;
// var c = 2.5;

// var d = a + b;
// console.log('d is ' + d);

// var e = a/b;
// console.log('e is ' + e);


//// String
// var aNewString = "a nice new string";
// console.log("string length", aNewString.length);
// console.log("string in caps", aNewString.toUpperCase());

// console.log("two strings " + "joined together");


////Boolean
// var myBoolean = 2 === "2";
//// Use the triple equals operator to check when things are equal to each other. The double equals will allow type conversion so then things like 2 == "2" will return true. so use triple so that 2 === "2" returns false.

// var myBoolean = 1 !== "1";
// // When checking if things dont equal each other use a double equals after the bang, eg. !==
// console.log('my boolean', myBoolean);


////Undefined
// Means a variable has been defined but there is nothing attached to it, eg var myVar;
////Null
// Means a variable has been defined but it is 'empty' eg. var myVar = null;


// var myVar = 1;
// console.log(typeof(myVar));


// var myVar = 1;
// myVar = "a string";
// console.log(myVar);


// console.log( "route" + 6 + 6);
// console.log( 6 + 6 + "route");


// var myBool = 1>2 && 3===3;
// var myBool = 1>2 || 3===3;
// var myBool = 1>2 || 3===3;
// console.log(myBool);


// var myBool = true;
// console.log(!myBool);


var myVar = 0;

if(myVar){
  console.log('variable evaluated as true');
}
//// If thing in () then do the stuff in the { }
//// The value of 0 (zero) evaluates to false but all other numbers evaluate to true.
//// Strings evaluate as true as long as there is something in it - an empty string returns false.
//// Null, undefined, and NaN will evaluate as false.

////NaN ( stands for Not a Number)
// var myVar = 3 * "cat";
// console.log(isNaN(myVar));

// if(myVar){
//   console.log('variable evaluate as true')
// }

// console.log('nan type', typeof(myVar));



// var myName = "Keith";

// if(myName === "Keith"){
//   console.log('having fun in Bordeaux');
// } else if(myName === "Tony"){
//   console.log('having fun with JS')
// } else {
//   console.log('is not our Keith');
// }


// var pet = "cat"

// switch(pet){
//   case "cat":
//     console.log("soft kitty, warm kitty, little ball of fur.");
//     break;
//   case "dog":
//     console.log("who let the dogs out.");
//     break;
//   default:
//     console.log("no pet, sad.");
// }



// 1 + 1 === 2 ? console.log("Yey, maths!") : console.log("Oh no, maths is broken")
