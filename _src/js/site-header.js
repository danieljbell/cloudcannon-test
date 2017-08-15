window.onload = function() {
  var menuToggle = document.querySelector('#header-more-button');
  menuToggle.addEventListener('click', function() {
    document.body.classList.toggle('menu-open');
  })
}