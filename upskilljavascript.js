// 1. create a function that will be able to convert figures from fahrenheit to celsius
console.log("NUMBER ONE ANSWER")
function ftoc(f_num){
    return (f_num-32) * (5/9);
}
var room= ftoc(80);
console.log(room);

// 2. Create a function that will calculate the average of numbers in an array
console.log("NUMBER TWO ANSWERS")
const Avg = (array) => {
    let sum = 0;
    for (let i =0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
}
console.log(Avg([1,2,3,4,5,6,7,8,9,10]))
console.log(Avg([20,30,40,50,60,70,80,90,100]))

// 3. Create a function that will check if a number, n is divisible by two numbers x and y.
// all inputs are positive, non-zero digits
console.log("NUMBER THREE ANSWER")

function divisible(n, x, y){

    if (n % x == 0 && n % y ==0){
        return true;
    }
    else{
        return false;
    }
}
var as= divisible(2,1,23)
console.log (as);

// 4. Create a function that will output the first 100 prime numbers
console.log("NUMBER FOUR ANSWERS")
function primenumbers(){
    var num= 100;
    var isprime;
    for (i=2; i<=num; i++){
        for (let j=2; j<i; j++){
            if (i % j === 0){
                isprime = 0;
                break;
            }
            else{
                isprime = 1
                break;
            }
        }
        if (isprime === 1){
            console.log(i)
        }
    }
}
primenumbers()

// 5. Create a function that will return a boolean specifying is a number is a prime number
console.log("NUMBER FIVE ANSWER")
function booleanprime(num){
    let isprime = '';
    for (let i =2; i<= Math.sqrt(num); i++){
        if(num % i ===0){
            isprime= false;
        }
        else{
            isprime = true;
        }
    }
    return isprime;
}
var booleanans= booleanprime(3);
console.log("number 5 ans=", booleanans)

// 6.Create a function that receives an array of numbers of diverse numbers and returns an array
// containing only positive numbers
console.log("NUMBER SIX ANSWER");
function getPositiveNumbers(numbers) {
    const positiveNumbers = numbers.filter((num) => {
        return num > 0;
    });
    return positiveNumbers;
}

// Generate an array of random numbers
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 201) - 100);
}

// Get the positive numbers from the array
const positiveNumbers = getPositiveNumbers(randomNumbers);
console.log(positiveNumbers);


// 7.Write a program that prints the numbers from 1 to 100 But for multiples of 3 prints 
// 'Fizz' instead of the Number and for the multiples of 5 prints 'Buzz.For numbers which 
// are multiples of 3 and 5, print 'FizzBuzz.'
console.log("NUMBER SEVEN ANSWERS")
function FizzBuzz(limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0) {
            console.log(i + " FIZZ");
        }
        if (i % 5 === 0) {
            console.log(i + " BUZZ");
        }
        if (i % 3 && i % 5 === 0) {
            console.log(i + " FIZZ BUZZ");
        } 
        else{
            console.log(i);
        }
    }
}
FizzBuzz(100);

// 8.The maeketing team is spending way too much time typing in hashtags.Let's create a hashtag
// generator for them, our hashtag generator will meet the following criteria; 
// 1.)it must start with a hash symbol, #
// 2.) Ignore all spaces in the input.
// 3.) All words must have their first letter capitalized.
// 4.) if the final result is going to be longer than 140 characters, it should return false.
// 5.) if the input or result is an empty string, it should return false
console.log("NUMBER EIGHT ANSWER")
function hashTagCreator (text) {
    let grpWords = text.split("");
    for (let i = 0; i<grpWords.length; i++){
        grpWords[i]=grpWords[i][0].toUpperCase()+grpWords[i].substr(i);
    }
    hashTag = grpWords.join("");
    console.log (`#${hashTag}`);
}
hashTagCreator("money making machine");
