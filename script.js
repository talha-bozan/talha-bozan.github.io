window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }
});

const filmLinks = document.querySelectorAll('.film-link');
filmLinks.forEach(filmLink => {
  const nestedList = filmLink.nextElementSibling;

  filmLink.addEventListener('mouseenter', () => {
    nestedList.style.maxHeight = '100px'; 
  });

  filmLink.addEventListener('mouseleave', () => {
    nestedList.style.maxHeight = '0';
  });
});

