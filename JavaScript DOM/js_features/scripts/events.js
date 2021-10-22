// Get reference of the button
const button = document.getElementById("button");

const buttonClick = (e) => {
  // // change the header title
  // document.getElementById("header-title").textContent = "changed";
  // document.querySelector("#main").style.backgroundColor = "#f4f4f4";
  // //
  console.log(e.target);
  console.log(e.target.id); // get the ID
  console.log(e.target.className); // get the class
  console.log(e.target.classList); // DomtokenList like an array of classes
  const output = document.getElementById("output");
  output.innerHTML = `<h3>${e.target.id}</h3>`;

  //type
  console.log(e.type); // whatever event it is: which is a click

  // position of the mouse
  //console.log(e.clientX); //  position from browser window
  //console.log(e.clientY); // from top down : browser window

  // Actual element
  console.log(e.offsetX); // actual element itself
  console.log(e.offsetY); // from top

  console.log(e.altKey); // if you pressing the alt key
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
};

// Add event listener
button.addEventListener("click", buttonClick);
