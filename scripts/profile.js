// js/profile.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("profile-form");
  const output = document.getElementById("profile-output");
  const saveBtn = document.getElementById("save-btn");
  const generateBtn = document.getElementById("generate-btn");

  // Object to hold profile data
  let profileData = {
    name: "",
    title: "",
    bio: "",
    github: "",
    linkedin: "",
    skills: ""
  };

  // Function 1: Load from localStorage
  function loadProfile() {
    const saved = localStorage.getItem("remoteMarketProfile");
    if (saved) {
      profileData = JSON.parse(saved);
      renderProfile();
    }
  }

  // Function 2: Save to localStorage
  function saveProfile() {
    localStorage.setItem("remoteMarketProfile", JSON.stringify(profileData));
    alert("Profile saved! Refresh the page to see it load automatically.");
  }

  // Function 3: Generate profile card using template literals ONLY
  function renderProfile() {
    if (!profileData.name) {
      output.innerHTML = `<p style="text-align:center; color:var(--gray);">No profile saved yet. Fill the form and click "Generate Profile"</p>`;
      return;
    }

    output.innerHTML = `
      <div class="profile-card">
        <h2>${profileData.name}</h2>
        <p class="title">${profileData.title || "Aspiring Remote Professional"}</p>
        <p class="bio">${profileData.bio || "No bio added yet."}</p>
        
        ${profileData.github ? `<p><strong>GitHub:</strong> <a href="${profileData.github}" target="_blank">${profileData.github}</a></p>` : ''}
        ${profileData.linkedin ? `<p><strong>LinkedIn:</strong> <a href="${profileData.linkedin}" target="_blank">${profileData.linkedin}</a></p>` : ''}
        
        ${profileData.skills ? `
          <div style="margin-top:1rem;">
            <strong>Skills:</strong>
            <div style="margin-top:0.5rem;">
              ${profileData.skills.split(",").map(skill => `<span class="tag">${skill.trim()}</span>`).join(" ")}
            </div>
          </div>
        ` : ''}

        <p style="margin-top:2rem; font-size:0.9rem; color:var(--gray);">
          Share this link with recruiters → <strong>${window.location.origin}${window.location.pathname}</strong>
        </p>
      </div>
    `;
  }

  // Form submit → update object → render
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    profileData = {
      name: document.getElementById("name").value.trim(),
      title: document.getElementById("title").value.trim(),
      bio: document.getElementById("bio").value.trim(),
      github: document.getElementById("github").value.trim(),
      linkedin: document.getElementById("linkedin").value.trim(),
      skills: document.getElementById("skills").value.trim()
    };
    renderProfile();
  });

  // Buttons
  saveBtn.addEventListener("click", saveProfile);
  generateBtn.addEventListener("click", () => renderProfile());

  // Load on page load
  loadProfile();
});