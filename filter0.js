[1, 2, 3, 4, 5].filter(function (num) {
  return num > 3;
});
//=> [ 4, 5 ]


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//Write a function that returns true if num is prime number 
function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
}

//filter method takes isPrime as callback function 
//      to create a new array consist only of prime numbers
const onlyPrime = array.filter(isPrime);

console.log(onlyPrime);
// LOG: [2, 3, 5, 7, 11, 13]

