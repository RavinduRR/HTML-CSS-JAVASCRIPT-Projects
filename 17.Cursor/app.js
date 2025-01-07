// Select the custom cursor element
const cursor = document.querySelector(".cursor");

// Listen to mousemove events on the document
document.addEventListener("mousemove", function (event) {
    // Get the position of the mouse pointer
    moveCursor(event.pageX, event.pageY);
});

// Function to move the cursor based on the mouse position
const moveCursor = function (pageX, pageY) {
    cursor.style.left = pageX + "px";
    cursor.style.top = pageY + "px";
};
