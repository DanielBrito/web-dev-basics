// Creates a div:
const newDiv = document.createElement("div");

// Adds a class:
newDiv.className = "hello";

// Adds an id:
newDiv.id = "hello-1";

// Adds an Attribute:
newDiv.setAttribute("title", "hello Div");

// Creates text node:
const newDivText = document.createTextNode("Hello World");

// Adds text to div:
newDiv.appendChild(newDivText);

// Gets a reference of the container (parent):
const container = document.querySelector("header .container");

// Gets a reference of h1:
const h1 = document.querySelector("header h1");

// Styles div:
newDiv.style.fontSize = "30px";

// Inserts div:
container.insertBefore(newDiv, h1);

console.log(newDiv);
