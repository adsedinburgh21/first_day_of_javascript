// function hello() {
//   console.log( "Hello Everyone!" )
// }

// hello()


// function add( a, b ) {
//   return a + b;
// }
// //// MUST have 'return' on line 9 above or below on line 11 the add(1,2) will return undefined
// console.log( "The return value is " + add( 1, 2) )



// function mood( name, mood ) {
//   console.log( name + " you are: " + mood);
// }
// mood( "Valerie", "stressed", 678);
//// Number of arguments: If pass too many arguments its ok - doesnt seem to mind.
//// If pass in too few arguments then the params that have not been specified are set to undefined.


// function sum() {
//   var i, total = 0;
//   //// Above we are setting 2 variables, i which is undefined and total which equals 0. Arguments is a hash that is in background when the params are not set, eg here we have sum(), not sum(with, stuff, in, here)
//   for ( i = 0; i < arguments.length; i+=1) {
//     total += arguments[i]
//   }
//   return total;
// }
// console.log( sum(1,2,3,4) )


// var hello = function() {
//   return 'Hello World'
// }

// console.log( hello() )


// var greater = function( a, b )
//   if ( a > b ) {
//     return a;
//   }
//   return b;
// }

// console.log( "Return is: " + greater( 1, 2 ) )




// var add = function( a, b ) {
//   return a + b;
// }

// var wow = function( functionToInvoke ) {
//   console.log( functionToInvoke( 2, 1 ) )
// }

// wow( add )
//// The add here has not got brackets after it because we are calling the variable 'add' which returns the whole function. If we put the brackets after it, then we would be envoking the function add. You can put the brackets on the end of a variable name that you have set to equal a function and you will envoke that function.




//// SCOPE

// var name = "Jay"
// //// Because this has been defined outside of a function it is a global variable - eg available everywhere. (It has a lower order of priority than a local variable.) This would also work without the var. If you set eg name = xyz, anywhere, even in a function then it will set a global variable.

// var talk = function() {
//   var name = "Rick";
//   console.log( 'My name is: ' + name );
// }
// console.log( 'trying to access result ' + name);
// //// name was defined inside of a function so its scope is only inside the function. Line above doesnt know what name is, it is undefined to it.

// var walk = function() {
//   console.log( name + ' is walking');
// }

// walk();



var greet = function( isHappy ) {

  var text = "";

  if ( isHappy ) {
    text = "Hello My Friend!";
  } else {
    text = "Mind your own business!";
  }

  var displayText = function() {
    console.log( text )
  }

  displayText();
}

greet( true )