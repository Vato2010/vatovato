function User(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    
    this.getInfo = function() {
        return `my name is ${this.name}, my lastname is ${this.lastName}, my phone number is ${this.phoneNumber}, and my gmail is ${this.email}.`;
    };
}


let user1 = new User("giorgi", "kvaracxelia", "555123456", "giorgi@gmail.com", "pass1234", "pass1234");
let user2 = new User("nino", "beridze", "555654321", "nino@gmail.com", "idk", "idk");
let user3 = new User("levani", "mikeladze", "555987654", "levan@gmail.com", "blabla", "blabla");

console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(user3.getInfo());
