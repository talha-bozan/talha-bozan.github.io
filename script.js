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

// script.js

// Function to switch between project tabs
function openProject(event, projectName) {
  // Hide all tabcontent elements
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the "active" class from all tablink elements
  var tablinks = document.getElementsByClassName("tablink");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the selected project tab and set the button as active
  document.getElementById(projectName).style.display = "block";
  event.currentTarget.classList.add("active");
}

// Set the initial active tab
document.getElementsByClassName("tablink")[0].click();


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

