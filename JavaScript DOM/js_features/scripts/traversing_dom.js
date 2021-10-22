// Selects element by id:
const itemList = document.querySelector("#items");

// Prints parentNode or parentElement's property:
console.log(itemList.parentNode);
console.log(itemList.parentElement);

// Styles the elements:
itemList.parentNode.style.backgroundColor = "#f4f4f4";

console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

// Examples using parentElement:
//itemList.parentElement.style.backgroundColor = "#f4f4f4"; // gray on the parentNode

//console.log(itemList.parentElement.parentElement); // <div class="container">
//console.log(itemList.parentElement.parentElement.parentElement); // body

// Retrieves list of children (including whitespaces):
console.log(itemList.childNodes);

// Retrieves an HTML collection (only elements):
console.log(itemList.children);

// Selects specific child element:
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";

// Selects firstElementChild:
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";

// Selects lastElementChild:
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 4";

// Selects nextSibling:
console.log(itemList.nextSibling);

// Selects nextElementSibling:
console.log(itemList.nextElementSibling);

// Selects previousSibling:
console.log(itemList.previousSibling);

// Selects previousElementSibling:
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";
