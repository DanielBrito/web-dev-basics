// Selects element by id:
const header = document.querySelector("#main-header");

// Styles selected element:
header.style.borderBottom = "solid 4px #ccc";

// Selects the input element:
const input = document.querySelector("input");

// Adds value to input:
input.value = "Value here...";

// Selects input by type:
const submit = document.querySelector('input[type="submit"]');

// Change value of the input:
//input.value = "SEND";

// Selects first occurrence of the item:
const item = document.querySelector(".list-group-item");

// Styles selected item (first):
item.style.color = "red";

// Selects last item:
const lastItem = document.querySelector(".list-group-item:last-child");

// Styles selected item (last):
lastItem.style.color = "blue";

// Selects nth child:
const secondItem = document.querySelector(".list-group-item:nth-child(2)");

// Styles selected item (nth):
secondItem.style.color = "green";

// Selects all occurences:
const titles = document.querySelectorAll(".title");

console.log(titles);

// Updating content of the first item:
titles[0].textContent = "New Item";

// Selecting odd/even ocurrences:
const odd = document.querySelectorAll("li:nth-child(odd)");
const even = document.querySelectorAll("li:nth-child(even)");

// Styles selected items:
odd.forEach((li) => {
  li.style.backgroundColor = "#f4f4f4";
});
