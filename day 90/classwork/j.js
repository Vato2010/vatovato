function person(name, number) {
    this.name = name;
    this.number = number;
    this.print = function() {
        console.log(this.name + this.number);
    };
}


let person1 =("lasha", "998501920");
let person2 =('vato', "2829200");


console.log(person1);
console.log(person2);
