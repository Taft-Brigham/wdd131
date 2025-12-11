// js/jobs-page.js
document.addEventListener("DOMContentLoaded", () => {
  const jobGrid = document.getElementById("job-grid");
  const categoryFilter = document.getElementById("category-filter");
  const typeFilter = document.getElementById("type-filter");
  const searchInput = document.getElementById("search-input");

  // Function 1: Render jobs using template literals + map()
  function renderJobs(jobsToShow) {
    if (jobsToShow.length === 0) {
      jobGrid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; padding:2rem;">No jobs found matching your filters.</p>`;
      return;
    }

    jobGrid.innerHTML = jobsToShow.map(job => `
      <div class="job-card">
        <h3>${job.title}</h3>
        <p class="company">${job.company} • ${job.location}</p>
        <div style="margin: 0.8rem 0;">
          ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <p style="color:var(--gray); font-size:0.9rem;">${job.type} • ${job.salary}</p>
        <a href="#" class="btn" style="margin-top:1rem; padding:0.6rem 1.2rem; font-size:0.9rem;">Apply Now</a>
      </div>
    `).join('');
  }

  // Function 2: Filter logic (uses filter(), toLowerCase(), conditional)
  function filterJobs() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedType = typeFilter.value;

    const filtered = allJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm) ||
                            job.company.toLowerCase().includes(searchTerm) ||
                            job.tags.some(tag => tag.toLowerCase().includes(searchTerm));

      const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
      const matchesType = selectedType === "All" || job.type === selectedType;

      return matchesSearch && matchesCategory && matchesType;
    });

    renderJobs(filtered);
  }

  // Event listeners
  categoryFilter.addEventListener("change", filterJobs);
  typeFilter.addEventListener("change", filterJobs);
  searchInput.addEventListener("input", filterJobs);

  // Initial render
  renderJobs(allJobs);
});