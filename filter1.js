const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
];

// REPLICATE .filter() METHOD BY WRITING A FUNCTION - see filter2.js for .filter() method
// Write a function that  
//      takes an array and a callback finction as arguments
//          the callback function executes a test and return true or false
//      executes the callback function on every element on the array
//      returns a new array containing only the filtered elements
//          the filtered elements are the ones returned true by the function
function filter(array, cb){
    let newArray = []
    for (element of array){
        if (cb(element)){
            newArray.push(element)
        }
    }
    return newArray;
}

//The above function's parameters can be tailored to the array above
function userFilter(userArray, cb){
    let newUserArray = []
    for (user of userArray){
        if (cb(user)){
            newUserArray.push(user)
        }
    }
    return newUserArray;
}

// callback function #1 (Blue and Penguin)
// Write a function that returns true if user's 
//      favoriteAnimal is Penguin and
//      favoriteColor is Blue 
function bluePenguin(user){
    return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin";
}

// callback function #2 (Jaguar and Red)
// Write a function that returns true if user's 
//      favoriteAnimal is Penguin and
//      favoriteColor is Blue 
const redJaguar = user => (user.favoriteColor === "Red" && user.favoriteAnimal === "Jaguar");

console.log(userFilter(users, bluePenguin));
/* LOG:
[
    {
      firstName: 'Josh',
      lastName: 'Rowley',
      favoriteColor: 'Blue',
      favoriteAnimal: 'Penguin'
    },
    {
      firstName: 'Avidor',
      lastName: 'Turkewitz',
      favoriteColor: 'Blue',
      favoriteAnimal: 'Penguin'
    }
  ]
*/
console.log(userFilter(users, redJaguar));
/*
[
  {
    firstName: 'Kate',
    lastName: 'Travers',
    favoriteColor: 'Red',
    favoriteAnimal: 'Jaguar'
  }
]
*/

