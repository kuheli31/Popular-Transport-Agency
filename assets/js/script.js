feather.replace();  // Ensure Feather icons are replaced

document.getElementById('aboutLink').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the default anchor click behavior
  
    // Get the target element (page1-container)
    const target = document.querySelector('.page1-container'); // Ensure the class exists
  
    console.log("Target: ", target); // Add logging to verify the target
    
    // Scroll smoothly to the target element if found
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error('Target element not found.');
    }
});
