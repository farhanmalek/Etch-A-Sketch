const myContainer = document.querySelector(".container");


let x = false;
let y = false;
 // Replace with your container's ID

myContainer.addEventListener("mousedown", () => {
    x = true;
    // console.log("x true");
    myContainer.addEventListener("mouseover", (e) => {
        y = true;
        // console.log("y true");
    
        if (x && y) {
            e.target.style.backgroundColor = document.querySelector("input[type=color]").value;
        }
    })

    myContainer.addEventListener("mouseup", () => {
        x = false;
        y = false; 
        // console.log("x and y reset to false");
    });
    
});

myContainer.addEventListener("mouseleave", () => {
    x = false;
    y = false;
    // console.log("x and y reset to false");
});


// Display selected number next to slider

const slider = document.querySelector(".slider");
slider.oninput = function (e)  {
    e.target.nextElementSibling.textContent = e.target.value;    
}

//Add functionality to grid, where we can now change the grid size based on what the slider value;
slider.addEventListener('mouseup', () => {
    while (myContainer.firstChild) {
        myContainer.removeChild(myContainer.firstChild);
    }
    const myValue = parseInt(document.querySelector(".slider p").textContent); // Assuming you have an element with the ID "myContainer"
    for (let i = 0; i < ((Math.pow(myValue, 2))); i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        myContainer.appendChild(div);
    }

    const pixelArray = document.querySelectorAll(".square");
    pixelArray.forEach((pixel) => {
        pixel.style.cssText = `width: calc(100% / ${myValue}); height: calc(100% / ${myValue});`;
    });
});

for (let i = 0; i < 256 ; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    myContainer.appendChild(div);
}


const reset = document.querySelector("#reset")

reset.addEventListener('click', () => {
    const pixels = document.querySelectorAll(".square");
const pixelArray = Array.from(pixels);
    pixelArray.forEach(pixel => {
        pixel.style.cssText = "background: #333";
    })

    const sliderValue = document.querySelector("#grid-size");
    sliderValue.value = 16;
    const sliderDisplay = document.querySelector(".slider p");
    sliderDisplay.textContent = 16;
})