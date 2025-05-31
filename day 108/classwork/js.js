// ეს არის გლობალური
let global = 'this is global' 
// ეს არის ლოკალური
function somefunction(){
    let local = 'this is local'

    console.log(global);
    console.log(local);
    
    
}
somefunction();

console.log(global);
// არ იმუშავებს, რადგან ლოკალური ცვლადი ფუნქციის შიგნით არის შექმნილი
console.log(local);  

let evenorodd = (num) => {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}