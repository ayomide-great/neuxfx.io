const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('navlinks')[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active') 
   
     

})

const navbarSelector = 'nav.navbar';
const navbar = document.querySelector(navbarSelector);

function addStyles(selector) {
    const styles = `
    ${navbarSelector} {
        transition: height 0.5s ease-in-out
    }
    ${navbarSelector}.small {
        height: 90px
    }
    `
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
}

addStyles(navbarSelector);

window.addEventListener('scroll', () => {
    window.scrollY > 10
        ? navbar.classList.add('small')
        : navbar.classList.remove('small')
})




const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const header = document.getElementById('header');

hamburger.addEventListener('click', function() {
  // Toggle the 'open' class on the menu
  menu.classList.toggle('open');

  // Toggle a fixed height for the header
  header.classList.toggle('fixed-height');
});
