// Scroll to contact section when button is clicked
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth'
  });
}

// Optional: Highlight navbar when scrolling
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 0 10px orange";
  } else {
    nav.style.boxShadow = "none";
  }
});