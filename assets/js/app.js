'use strict';

// Get the dropdown button
const dropdownBtn = document.querySelector('.dropdown-btn');
// Get the dropdown content
const dropdownContent = document.querySelector('.dropdown-content');

// Add a click event to the dropdown button
dropdownBtn.addEventListener('click', function() {
    // Toggle the class that shows or hides the dropdown content
    dropdownContent.classList.toggle('show');
});

