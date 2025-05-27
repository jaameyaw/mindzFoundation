'strict mode';

//Hides the loading screen immediately after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.remove("show");
    }
  }, 1);
});

// Activates nav link on section view.
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          if (navLink) navLink.classList.add("active");
        }
      });
    },
    {
      root: null,
      threshold: 0.5, 
    }
  );

  sections.forEach((section) => observer.observe(section));
});


// Handles opening and closing of the donate modal dialog
const openBtn = document.querySelectorAll(".openDonateModal");
const closeBtn = document.getElementById("closeDonateModal");
const modal = document.getElementById("donateModal");

// Adds event listeners to all buttons that open the modal  
openBtn.forEach(button => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
    document.body.classList.add("modal-open"); 
  });

})

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal(); 
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {  
  // Handle esc key to close the modal
    closeModal();
  }
})


// Toggles visibility of extra images and updates the button text accordingly
const toggleBtn = document.getElementById("toggle-gallery");
const extraImages = document.getElementById("extra-images");

toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (extraImages.classList.contains("show")) {
    extraImages.classList.remove("show");
    toggleBtn.textContent = "View More";
  } else {
    extraImages.classList.add("show");
    toggleBtn.textContent = "Show Less";
  }
});



