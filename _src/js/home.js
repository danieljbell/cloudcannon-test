var airplaneSection = document.querySelector('#airplane-section');
var airplaneContainer = document.querySelector('#airplane-container');
var airplaneImg = airplaneContainer.querySelector('img');
var airplaneOffset = airplaneContainer.offsetTop;

window.addEventListener('scroll', function() {
  var scrollY = window.scrollY;

  if (scrollY > (airplaneSection.offsetTop - 1000)) {
    console.log('trigger');
    airplaneImg.style.transform = 'translate(' + ((scrollY - airplaneSection.offsetTop + 200) / 2) + 'px, -' + ((scrollY - airplaneSection.offsetTop + 200) / 2) + 'px)';
  }

  // if (scrollY < (airplaneSection.offsetTop - 1000)) {
  //   airplaneImg.style.transform = 'translate(0, 0)';
  // }

});




// var airplaneEntryWaypoint = new Waypoint({
//   element: document.querySelector('#airplane-container'),
//   handler: function(direction) {
//     if (direction === 'down') {
//       document.body.classList.add('airplane-in-view');
//       document.body.classList.remove('airplane-out-view');
//     } else {
//       document.body.classList.remove('airplane-out-view');
//       document.body.classList.remove('airplane-in-view');
//     }
//   },
//   offset: '45%'
// });

// var airplaneExitWaypoint = new Waypoint({
//   element: document.querySelector('#airplane-container'),
//   handler: function(direction) {
//     document.body.classList.remove('airplane-in-view');
//     document.body.classList.add('airplane-out-view');
//   },
//   offset: '15%'
// });

// var airplaneExitWaypoint = new Waypoint({
//   element: document.querySelector('#airplane-container'),
//   handler: function(direction) {
//     document.body.classList.remove('airplane-in-view');
//     document.body.classList.remove('airplane-out-view');
//   },
//   offset: '-50%'
// });