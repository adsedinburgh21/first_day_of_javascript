//Section 1

//what types are these? Write your answer in a comment beside it.

1;   // Number
"cat";  // String
true;  // Boolean
[];   // Object
{};   // Object
1.1;  // Number
undefined;  // Undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; // true
true; // true
NaN;  // false
[];  // true
{};  // true
undefined;  // false
"";  // false
0;  // false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a Number     
      var myVariable = 3;
//3.2 Assign a variable that is a string
      var myVariable = "Hello";
//3.3 Assign a variable that is a boolean
      var myVariable = true;
//3.4 Assign a variable that is an object 
      var myVariable = [ 1, 2, 3, 4 ];

//Section 4
// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

var arriving = true;

if( arriving){
  console.log( "Hello");
} else {
  console.log( "Bye");
}

// Turnery Operator written as below in JavaScript:
// arriving ? console.log("Hello") : console.log("Bye")



//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
    
    var firstElement = animals[0];
    var firstElement = animals.shift();

//5.2. Assign the last element to a variable

    var lastElement = animals[3];
    var lastElement = animals.pop();

//5.3. Assign the length of an array to a variable

    var lengthOfArray = animals.length;

//5.4. Add an item to the end of the array

    function addEnd( animal ){
      animals.push( animal)
    }

    animals.push("penguin");

//5.5. Add an item to the start of the array

    animals.unshift("otter");

//5.6. Assign the index of hedgehog to a variable

    var spikey = animals[1];
    var spikey = animals.splice(1,1);



//Section 6

//6.1 Create an array of 5 vegetables
    var vegetables = ["carrot", "pepper", "leek", "parsnip", "peas"];

//6.2 Loop over the array and write to the console using a "while"

    i = 0;
    while( i < vegetables.length){
      console.log( vegetables[i] );
      i++;
    }

//6.3 Loop again using a "for" with a counter

    for( i=0; i < vegetables.length; i++ ){
      console.log( vegetables[i]);
    }

//6.4 Loop again using a "for in"

    for( var veg of vegetables){
      console.log( veg );
    }
// if use 'in' instead of 'of' then it prints numbers 0 to 4. I assume this is the index no's, why does it print this?


//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
]
// 7.1 Calculate the total cash in accounts

    var totalCash = 0;
    for( var entry of accounts){
      totalCash += entry['amount'];
    } return totalCash;

// 7.2 Find the name of the account with the largest balance

    
    var ordered = accounts.sort( function( a, b){ return b['amount']-a['amount']});
    return ordered[0]['name']

//7.3 Find the name of the account with the smallest balance

    var ordered = accounts.sort( function( a, b){ return a['amount']-b['amount']});
    console.log(ordered[0]['name'])

//7.4 Calculate the average bank account value

    var totalCash = 0;
    for( var entry of accounts){
      totalCash += entry['amount'];
    }
    return totalCash/accounts.length
    

// 7.5 Find the value of marcs bank account

    function balance( accountHolder ){
      var total;
      for( var account of accounts){
        if( account['name'] === accountHolder){
          total = account['amount'];
        }
      } 
      return total;
    }
    console.log(balance('marc'))


  // console.log(accounts[2]['amount'])

//7.6 Find the holder of the largest bank account

    var ordered = accounts.sort( function( a, b){ return b['amount']-a['amount']});
    console.log(ordered[0]['name']);

//7.7 Calculate the total cash in business accounts
    
    var businessTotal = 0;
    for( var account of accounts){
      if(account['type'] === 'business'){
        businessTotal += account['amount'];
      }
    } return businessTotal;

//7.8 Find the largest personal account owner
  
  var personalAccounts = []
  for( var account of accounts){
    if(account['type'] === 'personal'){
      personalAccounts.push(account);
    }
  }
  var ordered = personalAccounts.sort( function( a, b){ return b['amount']-a['amount']});
  return ordered[0]['name']



//Section 8
//Assign a variable myPerson to a hash, giving them a name, height favourate food

  var myPerson = {
    name: "Adam",
    height: 172,
    favourateFood: 'cereal'
  }
