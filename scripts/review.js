document.addEventListener("DOMContentLoaded", function () {
  // Review counter
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  reviewCount = parseInt(reviewCount) + 1;
  localStorage.setItem("reviewCount", reviewCount);
  document.getElementById("review-count").textContent = reviewCount;

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Last modified date and time
  document.getElementById("lastModified").textContent = 
    "Last Modification: " + document.lastModified;
});