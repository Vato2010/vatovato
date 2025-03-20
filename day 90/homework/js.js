let myArray = [42, "Hello", true, { key: "value" }, [1, 2, 3], function() { return "I'm a function"; }, null, undefined, Symbol("sym"), BigInt(9007199254740991)];

console.log(myArray[0]); 
console.log(myArray[1]); 
console.log(myArray[2]); 
console.log(myArray[3]); 
console.log(myArray[4]);


myArray[5] = "New String";
myArray[6] = 99;
myArray[7] = false;
myArray[8] = { newKey: "newValue" };
myArray[9] = [10, 20, 30];

console.log(myArray);
