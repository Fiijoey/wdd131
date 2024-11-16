// script.js
document.getElementById('hamburger').addEventListener('click', function() {
    var navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
    this.classList.toggle('open');
  });
  
  // Optional: Change hamburger to 'X' when open
  document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
  });
  