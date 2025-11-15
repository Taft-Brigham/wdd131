const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
// Select the H1 element
const pageTitle = document.querySelector("header h1"); 

// Hamburger toggle logic
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    
    // Toggle the 'hidden' class on the H1
    // This hides the title on small screens when the menu is open
    pageTitle.classList.toggle("hidden"); 
});

// Footer info
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;