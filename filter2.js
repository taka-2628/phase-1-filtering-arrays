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

// USE .filter() METHOD TO FILTER ELEMENTS IN AN ARRAY 
//      - see filter1.js: the same thing without using .filter() method 

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

console.log(users.filter(bluePenguin))
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
console.log(users.filter(redJaguar))
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
