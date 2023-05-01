git//Larger Number (1)
function largerNumber(x,y){
    if(x>y){
    alert(`The Larger Number is ${x}`);
    }
    else if(x==y){
        alert(`Both values ${x} and ${y} are equal in comparison`);
    }
    else{
        alert(`The Larger Number is ${y}`);
    }
}

//largerNumber(7,7);

//Add numbers in an array (2)
let numbers = [];
let newNumbers = [10,20,30,45]; 
let sum = 0;
function addNumbers(numbers){
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log(`The sum of the array is ${sum}`);
}

//addNumbers(newNumbers);

//length of string (3)
let word = '';
let name = 'David';
function stringLength(word){
    if (word.length <1){
        console.log('Empty String!!');
    }
    else{
        console.log(word.length);
    }
}

//stringLength(name);

//FizzBuzz (4)
let number = 0;
let age = 15;
let cars = 4;
function fizzBuzz(number){
    if (number % 3 == 0 && number % 5 == 0){
        console.log('FizzBuzz');
    }
    else if(number % 3 == 0){
        console.log('Fizz');
    }
    else if(number % 5 == 0){
        console.log('Buzz');
    }
    else{
        console.log(`Your number ${number} is not divisible by either 3 or 5`);
    }
}

//fizzBuzz(cars);

//longest string in the array (5)
const names = ['David','Glory','Divine','Seyi'];

function longestString(names){
    if (names.length>1){
        let longest = names[0];
        for (i=0; i < names.length ; i++ ){
            if (names[i].length > longest.length){
                longest = names[i];
            }
        }
        console.log(`The longest string in the array is ${longest}`);
    }
    else{
        console.log('EMPTY ARRAY!');
        
    }
}

longestString(names);

// const names = ['David', 'Glory', 'Divine', 'Seyi'];

// function longestString(names) {
//     if (names.length > 0) {
//         let longest = names[0];
//         for (let i = 1; i < names.length; i++) {
//             if (names[i].length > longest.length) {
//                 longest = names[i];
//             }
//         }
//         console.log(`The longest string in the array is "${longest}".`);
//     } else {
//         console.log('EMPTY ARRAY!');
//     }
// }

// longestString(names);
