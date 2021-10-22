// Retrieves elements:
const button = document.getElementById("button");
const box = document.getElementById("box");
let output = document.getElementById("output");

// Callback function:
const runEvent = (e) => {
  console.log(`EVENT TYPE: ${e.type}`);
  output.innerHTML = `<h3>MouseX: ${e.offsetX}</h3><h3>MouseY: ${e.offsetY}</h3>`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
};

// Triggered with a single click:
button.addEventListener("click", runEvent);

// Triggered with a double click:
button.addEventListener("dblclick", runEvent);

// Triggered when press on the mouse button:
button.addEventListener("mousedown", runEvent);

// Triggered when the mouse is moving:
box.addEventListener("mousemove", runEvent);

// Other mouse events:

// mouse enter:
//box.addEventListener("mouseenter", runEvent);

// mouse leave:
//box.addEventListener("mouseleave", runEvent);

// mouse over:
//box.addEventListener("mouseover", runEvent);

// mouse out:
//box.addEventListener("mouseout", runEvent);
