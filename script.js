const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarClose = document.getElementById('sidebar-close');
let isSidebarOpen = false;

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  isSidebarOpen = !isSidebarOpen;

  if (isSidebarOpen) {
    sidebarToggle.style.display = 'none';
    sidebarClose.style.display = 'block'; // Show the close button
  }
});

sidebarClose.addEventListener('click', () => {
  sidebar.classList.remove('open');
  sidebarToggle.style.display = 'block';
  sidebarClose.style.display = 'none'; // Hide the close button
  isSidebarOpen = false;
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50 && !isSidebarOpen) {
    sidebar.classList.add('open');
    sidebarToggle.style.display = 'none';
  } else if (!isSidebarOpen) {
    sidebar.classList.remove('open');
    sidebarToggle.style.display = 'block';
    sidebarClose.style.display = 'none'; // Hide the close button
  }
});

window.addEventListener('scroll', () => {
  if (isSidebarOpen && window.scrollY === 0) {
    sidebar.classList.remove('open');
    sidebarToggle.style.display = 'block';
    sidebarClose.style.display = 'none'; // Hide the close button
    isSidebarOpen = false;
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

