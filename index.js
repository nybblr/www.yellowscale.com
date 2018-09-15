(function() {

var toggleMenu = document.querySelectorAll('.js-toggle-menu');
var navbar = document.querySelector('.js-navbar');
var scroller = document.querySelector('.js-navbar-scroll');

var totalSteps = 5;
var steps = 0;
var disableTransition = function(event) {
  steps++;
  if (steps >= totalSteps) {
    navbar.classList.add('no-transition');
    navbar.removeEventListener('transitionend', disableTransition);
    steps = 0;
  }
};

var enableTransition = function() {
  navbar.classList.remove('no-transition');
};

var toggle = function() {
  navbar.classList.toggle('menu-expanded');
};

var handleToggle = function(event) {
  event.preventDefault();
  scroller.scrollTop = 0;
  enableTransition();
  navbar.addEventListener('transitionend', disableTransition);
  toggle();
};

toggleMenu.forEach(function(ele) {
  ele.addEventListener('click', handleToggle);
});

var gallery = document.querySelector('.gallery');
var images = document.querySelectorAll('.gallery > li');
var scrollContainer = document.scrollingElement;
images.forEach(function(image, i) {
  image.addEventListener('click', function(event) {
    event.preventDefault();

    var style = getComputedStyle(gallery);
    var zoom = parseInt(style.getPropertyValue('--per-row'), 10);

    var top = (zoom * image.offsetTop - scrollContainer.scrollTop) / ((zoom - 1) || 1);
    var left = (100 / (zoom - 1) * (i % zoom)) || 0;

    if (gallery.classList.contains('focus')) {
        gallery.style.transform = null;
        gallery.style.transformOrigin = null;
    } else {
      if (perRow === 1) {
        gallery.style.transform = `translateY(-${top}px)`;
      } else {
        gallery.style.transformOrigin = `${left}% ${top}px`;
      }
    }

    gallery.classList.toggle('focus');
  });
});

})();
