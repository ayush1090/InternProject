// event listener to the window object for the 'load' event
window.addEventListener('load', function() {

  var nav = document.querySelector('nav');
  var logo = nav.querySelector('a img');
  var links = nav.querySelectorAll('ul li a');


  logo.addEventListener('click', function(event) {
    event.preventDefault(); 
    console.log('Logo clicked');
  });

});
