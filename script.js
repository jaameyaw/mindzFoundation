'strict mode';


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navlink => {
  navlink.addEventListener("click", function() {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});




