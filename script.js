// Function triggered when an image is hovered or focused
function upDate(previewPic) {
    console.log("Event triggered: update main display");
    const imageDiv = document.getElementById("image");
    
    // Update background image and text
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
}

// Function triggered when mouse leaves or image loses focus
function unDo() {
    console.log("Event triggered: reset main display");
    const imageDiv = document.getElementById("image");
    
    // Reset background image and text
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Function triggered onload to automatically add tabindex attribute
function initializeGallery() {
    console.log("Page loaded: Initializing gallery accessibility attributes...");
    
    const figures = document.querySelectorAll(".preview");

    // Loop through each figure/image wrapper and set tabindex
    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute("tabindex", "0");

        const currentImg = figures[i].querySelector("img");

        // Add Mouse Events
        figures[i].addEventListener("mouseover", function () {
            upDate(currentImg);
        });
        figures[i].addEventListener("mouseleave", function () {
            unDo();
        });

        // Add Keyboard Focus Events
        figures[i].addEventListener("focus", function () {
            upDate(currentImg);
        });
        figures[i].addEventListener("blur", function () {
            unDo();
        });
    }
}

// Add onload listener to window
window.addEventListener("load", initializeGallery);