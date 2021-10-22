// Gets element by id:
const headerTitle = document.getElementById("header-title");
const header = document.getElementById("main-header");

console.log(headerTitle);

// Changes the text of the element:
headerTitle.textContent = "JS Item Lister";

// Updates inner text:
//headerTitle.innerText = "Goodbye";

// Will not pay attention to the styling like "span":
//console.log(headerTitle.textContent);

// Will pay attention to the styling like "display: none":
//console.log(headerTitle.innerText);

// Inner HTML:
headerTitle.innerHTML = "<h1>Item Lister in JS</h1>";

// Changes the style:
header.style.borderBottom = "solid 3px green";

const items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);

// Styles retrieved item:
items[1].textContent = "hello";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";

// Iterates through items (styling):
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "#f4f4f4";
}

// Retrieves all elements:
const li = document.getElementsByTagName("li");

console.log(li);
console.log(li[0]);

// Iterates through elements:
for (let i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "#f4f4f4";
}

/* NOTES:

Nodelist: Static, returns any type of nodes, text node, comments etc.
HTML Collection: Only returns nodes and it's live so it will update changes.

Returns static collection (NodeList):
const fruits = document.querySelectorAll(‘.fruits’);
 
Returns live collection (NodeList):
const fruits = document.querySelector(‘.fruits’);
const childFruit = fruits.childNodes;

Things like form.elements, document.getElementsByTagName, 
document.getElementsByClassName, and document.querySelectorAll 
return a NodeList.

A NodeList is essentially an object that doesn't have any methods like an array.

NodeList doesn’t share the Array’s prototype, of which contains the forEach method.
*/
