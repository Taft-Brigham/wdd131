const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", function () {
  const productSelect = document.getElementById("product");

  // Clear any existing options (in case script runs twice)
  productSelect.innerHTML = '<option value="" disabled selected>Select a Product ...</option>';

  // Populate dynamically
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;                    // value = id
    option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1); // Capitalize
    productSelect.appendChild(option);
  });

  // Footer and last modified year
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = 
  "Last Modification: " + lastModified;
});