
let number = Number(prompt('შეიყვანეთ რიცხვი: '));
if (number % 2 == 0) {
    console.log('რიცხვი ლუწია');
} else {
    console.log('რიცხვი კენტია');
}


let temperature = prompt('შეიყვანეთ ტემპერატურა')
if (temperature <= 10) {
    console.log('ცხელა');
}else if (temperature <= 25) {
    console.log('ზომიერია');
}else if(temperature <= 35){
    console.log('ცივა');
    
}

let score = prompt('შეიყვანე ქულა: ')
if (score >= 90){
    console.log('A');
}else if (score >= 80){
    console.log('B');
}else if (score <= 70){
    console.log('C');
}else if (sistema >= 60){
    console.log('D');
}else if (sistema >= 0){
    console.log('F');
}