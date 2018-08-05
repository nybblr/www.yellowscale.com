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

})();
