// document.body.innerHTML ='<h1>hello world</h1>';
// console.log(document);
// document.body.innerHTML = '<button>hello world</button>';
// document.body.innerText = 'hello world';
// document.body.textContent = '<u>hello world</u>';
// let h1 = document.getElementById('heading one')
// console.log(h1.textContent)
// let p = document.getElementsByClassName('p1')
// console.log(p[0].textContent);
// let button = document.getElementsByTagName('button')
// console.log(button[0].textContent);

// let h1 = document.querySelector('#heading one')
// let p = document.querySelector('.p1')
// let button = document.querySelector('button')
// console.log(h1);
// console.log(p);
// console.log(button);

// let arrOfh1s = document.querySelectorAll;('#heading one')
// // console.log(h1);
// for(let i = 0; i < arrOfh1s.length; i++){
//    arrOfh1s[i].style.color = 'red';
// };

let h1 = document.getElementById('headingone')
h1.style.color = 'red';
h1.style.fontSize = '40px';
h1.style.fontFamily = 'Arial';
h1.textContent = 'hello world';


let p = document.getElementsByClassName('p1')
p[0].style.color = 'blue';
p[0].style.fontSize = '30px';
p[0].style.fontFamily = 'cursive';
p[0].textContent = 'hello world';

let button = document.getElementsByTagName('button')
button[0].style.color = 'green';
button[0].style.fontSize = '20px';
button[0].style.fontFamily = 'Arial';
button[0].textContent = 'hello world';