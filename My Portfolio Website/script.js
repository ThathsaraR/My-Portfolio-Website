
  // Get the navbar element
const scrollNavbar = document.getElementById('scroll-navbar');

// Function to toggle navbar visibility based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Current scroll position
    const threshold = 200; // Adjust threshold to control when navbar appears

    if (scrollPosition > threshold) {
        scrollNavbar.classList.remove('hidden');
        scrollNavbar.classList.add('visible');
    } else {
        scrollNavbar.classList.remove('visible');
        scrollNavbar.classList.add('hidden');
    }
});

function showSlidebar(){
    const slidebar = document.querySelector('.slidebar')
    slidebar.style.display= "flex"
}
function hideSlidebar(){   
    const slidebar = document.querySelector('.slidebar')
    slidebar.style.display= "none"
}
