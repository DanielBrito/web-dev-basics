// Retrieving elements:
const itemInput = document.querySelector('input[type="text"]');
const output = document.querySelector("#output");
const form = document.querySelector("form");
const select = document.querySelector("select");

// Callback function:
const runEvent = (e) => {
  // Prints the event type:
  console.log(`EVENT TYPE: ${e.type}`);

  // Gets the value of the select box:
  console.log(e.target.value);
};

// Triggers when (and until) some key is been pressed:
itemInput.addEventListener("keydown", runEvent);

// Triggers when the key is released:
itemInput.addEventListener("keyup", runEvent);

// Triggers after the press-and-release:
itemInput.addEventListener("keypress", runEvent);

// Triggers when clicked inside an input:
itemInput.addEventListener("focus", runEvent);

// Triggers when clicked away from input:
itemInput.addEventListener("blur", runEvent);

// Triggers on cut:
itemInput.addEventListener("cut", runEvent);

// Triggers on paste:
itemInput.addEventListener("paste", runEvent);

// Triggers when anything is done with an input:
itemInput.addEventListener("input", runEvent);

// Triggers when something change inside an input:
select.addEventListener("change", runEvent);

// Input and Change will run when selecting something:
select.addEventListener("input", runEvent);

// Triggers on submiting:
form.addEventListener("submit", runEvent);
