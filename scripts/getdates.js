// Adding The date to the footer

const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();

year.innerHTML =  `<span class="highlight">${today.getFullYear()}</span>`;





// This scripts handles the images and how they behave

const hobbies = {
  hobby1: ["images/coding.png"],
  hobby2: ["images/dancing.png"],
  hobby3: ["images/eating.png"],
  hobby4: ["images/gaming.png"],
  hobby5: ["images/skating.png"],
  hobby6: ["images/table tennis.png"]
};

const indexes = {};

Object.keys(hobbies).forEach(key => {
  const img = document.getElementById(key);
  indexes[key] = 0;

  setInterval(() => {
    img.src = hobbies[key][indexes[key]];
    indexes[key] = (indexes[key] + 1) % hobbies[key].length;
  }, 1200);
});


// The following script below makes the portrait image respnsive to the cursor location
const portraitCard = document.querySelector(".portrait-card");

portraitCard.addEventListener("mousemove", (e) => {
  const { offsetWidth: width, offsetHeight: height } = portraitCard;
  const { offsetX: x, offsetY: y } = e;

  // Calculate rotation and shadow offset
  const moveX = (x / width - 0.5) * 30;  // max 15px left/right
  const moveY = (y / height - 0.5) * 30; // max 15px up/down

  portraitCard.style.boxShadow = `${-moveX}px ${-moveY}px 30px rgba(12, 12, 12, 0.3)`;
});

portraitCard.addEventListener("mouseleave", () => {
  portraitCard.style.boxShadow = "10px 10px 20px rgba(202, 188, 188, 0.25)";
});



// Get the element where we want to insert the date
  const lastModifiedParagraph = document.getElementById("lastModified");

  // Use the document.lastModified property
  lastModifiedParagraph.textContent = "Last modified on: " + document.lastModified;