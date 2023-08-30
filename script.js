const myContainer = document.querySelector(".container");

for (let i = 0; i < 4096; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
  myContainer.appendChild(div);
}

const pixels = document.querySelectorAll(".square");
const pixelArray = Array.from(pixels);
let x = false;
let y = false;
 // Replace with your container's ID

myContainer.addEventListener("mousedown", () => {
    x = true;
    // console.log("x true");
});

myContainer.addEventListener("mouseover", (e) => {
    y = true;
    // console.log("y true");

    if (x && y) {
        e.target.style.backgroundColor = "white";
    }
});

myContainer.addEventListener("mouseup", () => {
    x = false;
    y = false;
    // console.log("x and y reset to false");
});
