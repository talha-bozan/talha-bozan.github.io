let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebar);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
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

