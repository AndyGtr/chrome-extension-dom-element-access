// Selector for the HTML element you want to target
const selector = '.Header_flex__IxrK6';

// Attempt to find the element in the DOM
const element = document.querySelector(selector);

// Function to change the background color of the element
function changeBackgroundColor(element) {
    // Specify the new background color
    const newBackgroundColor = '#ffcc00'; // Example: Yellow
    element.style.backgroundColor = newBackgroundColor;
}

// Check if the element exists
if (element) {
    // Change the background color of the element
    changeBackgroundColor(element);
} else {
    // Alert the user if the element does not exist
    alert('The specified element does not exist on this page.');
}
