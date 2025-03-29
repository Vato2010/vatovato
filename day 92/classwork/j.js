let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

let concatArray = array1.concat(array2);
concatArray.copyWithin(concatArray.length, 0, 2);
concatArray.fill(0, concatArray.length - 3);

let lastElement = concatArray.pop();
let firstElement = concatArray.shift();

concatArray.unshift(10, 20);

function modifyArray(inputArray) {
    let resultArray = inputArray.concat([5, 6, 7, 8]);
    resultArray.copyWithin(resultArray.length, 0, 2);
    resultArray.fill(0, resultArray.length - 3);

    let lastElement = resultArray.pop();
    let firstElement = resultArray.shift();
    resultArray.unshift(10, 20);

    return {
        modifiedArray: resultArray,
        firstElement: firstElement,
        lastElement: lastElement
    };
}

let testArray = [1, 2, 3, 4];
let result = modifyArray(testArray);
