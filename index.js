// Add answers here
function nameOfCity(string) {
  const beginnWith = string.substring(0, 3).toLowerCase();
  if (beginnWith == "new" || beginnWith == "los") {
    return string;
  } else {
    return "The city name does not begin with Los or New";
  }
}
nameOfCity("New York");
nameOfCity("newark");
nameOfCity("London");


//2 isDivisible


function isDivisible(intiger) {
    if (intiger % 100 === 0){
        return true;
    }else {
        return false
    }
}
isDivisible(1) 
isDivisible(1000)
isDivisible(100)


//3  What's the weather?
function isRaining(string) {
    return string
    ? 'wet day - you need an umbrella'
    : 'dry day - leave your umbrella at home'
}
console.log(isRaining(true));

//Loops 4. Sequence
function geometricalSequence() {
    
}
//5. Multiples
const multiplesOfThree = () => {
    let result = '';
    let multiples = 0;
    for (i = 0; i < 5; i++) {
        multiples += 3;
        result += multiples + ' ';
    }
    return result;
}
console.log(multiplesOfThree());

//6. You've got the power
function powerOf(intiger) {
    result = Math.pow(intiger,intiger);
    return result;
}
powerOf(3)
powerOf(4)


//1. How many? 
function vowelCount(string) {
    const vowels = 'AeEeIiOoUu';
    let counter = 0;
    for (let i = 0; i < string.length; i++){
        if (
            string[i] === 'A'||
            string[i] === 'E'||
            string[i] === 'I'||
            string[i] === 'O'||
            string[i] === 'U'||
            string[i] === 'a'||
            string[i] === 'e'||
            string[i] === 'i'||
            string[i] === 'o'||
            string[i] === 'u'
        ) {
            counter++;
        }
    }
    return counter;
}
vowelCount("hello")
vowelCount("test")
vowelCount("fbw") 

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
