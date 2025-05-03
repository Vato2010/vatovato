const paragraph = document.createElement("p");
paragraph.textContent = "This is a paragraph.";
document.body.appendChild(paragraph);

const heading = document.createElement("h2");
heading.textContent = "Subheading.";
document.body.appendChild(heading);

heading.textContent = "Updated Subheading.";

const div = document.createElement("div");
div.textContent = "This is a div.";
document.body.appendChild(div);

document.body.removeChild(div);
// --- Create a <ul> with three <li> elements ---
const ul = document.createElement("ul");

for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  ul.appendChild(li);
}

document.body.appendChild(ul);

console.log("First <li>:", ul.firstElementChild);
console.log("Last <li>:", ul.lastElementChild);

const h3 = document.createElement("h3");
h3.textContent = "Inserted Heading";
document.body.insertBefore(h3, document.body.firstElementChild);

const span = document.createElement("span");
span.textContent = "This is a span.";
const container = document.getElementById("container");
container.appendChild(span);

console.log("Parent of span:", span.parentElement);
