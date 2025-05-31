const numbers = [3, 7, 2, 9, 5];
let sum = 0;

for (const num of numbers) {
  sum += num;
}

console.log("სრული ჯამი არის:", sum);

const message = "გამარჯობა";

for (const char of message) {
  console.log(char);
}

const words = ["თაგვი", "კომპიუტერი", "ქაღალდი", "კოდი", "ინტერნეტი"];

for (const word of words) {
  if (word.length > 5) {
    console.log(word);
  }
}


const productPrices = {
  რძე: 4.5,
  პური: 2,
  ყველი: 7.2,
  კარაქი: 5
};

let total = 0;

for (const key in productPrices) {
  total += productPrices[key];
}

console.log("ფასების ჯამი:", total);

const books = {
  "ჰარი პოტერი": "ჯოან როულინგი",
  "მარტო სახლში": "ჯონ ჰიუზი",
  "მამაცი გული": "ბრიუს ბერკფორდი"
};

const bookTitles = [];

for (const title in books) {
  bookTitles.push(title);
}

console.log("წიგნების სია:", bookTitles);
