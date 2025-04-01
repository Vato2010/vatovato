// let fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

// let citrus = fruits.slice(1, 3);

// fruits.splice(-2, 2, 'fig');

// let fruitString = fruits.join('-');

// function processFruits(fruitsArray) {
//     let citrus = fruitsArray.slice(1, 3);
//     fruitsArray.splice(-2, 2, 'fig');
//     return fruitsArray.join('-');
// }

// let result = processFruits(fruits);
// console.log(result);
let nestedArray = [1, [2, 3], [4, [5, 6]], 7, 8];

let flatArray = nestedArray.flat();
let fullyflatArray = nestedArray.flat(2)

function checkElement(arr,value){
    return arr.includes(value)
}

function findIndexOfElement(arr, value) {
    return arr.indexOf(value);
  }

 function findLastIndexOfElement(arr, value) {
    return arr.lastIndexOf(value);
  }

console.log(nestedArray);
