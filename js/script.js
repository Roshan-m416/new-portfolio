let lastScrollTop = 0;
const navbar = document.getElementById('nav');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll Down
        nav.style.top = '-80px'; // Adjust this value based on your navbar height
    } else {
        // Scroll Up
        nav.style.top = '0';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
function toggleMenu() {
    var menuItems = document.getElementById("nav-menu");
    navmenu.classList.toggle("show");
  }