// var airplaneContainer = document.querySelector('#airplane-container');
// var airplaneImage = airplaneContainer.querySelector('img');
// var airplaneOffset = airplaneContainer.offsetTop;
// var airplaneHeight = airplaneContainer.offsetHeight;
// var scrollTop = window.scrollY;


var airplaneEntryWaypoint = new Waypoint({
  element: document.querySelector('#airplane-container'),
  handler: function(direction) {
    document.body.classList.add('airplane-in-view');
    document.body.classList.remove('airplane-out-view');
  },
  offset: '50%'
});

var airplaneExitWaypoint = new Waypoint({
  element: document.querySelector('#airplane-container'),
  handler: function(direction) {
    document.body.classList.remove('airplane-in-view');
    document.body.classList.add('airplane-out-view');
  },
  offset: '20%'
});

// var airplaneInView = new Waypoint.Inview({
//   element: document.querySelector('#airplane-container'),
//   enter: function(direction) {

//   },
//   entered: function(direction) {
//     document.body.classList.add('airplane-in-view');
//   },
//   exit: function(direction) {
//     if (direction === 'up') {
//       document.body.classList.remove('airplane-in-view');
//     }
//   },
//   exited: function(direction) {
//     console.log('Exited triggered with direction ' + direction);
//   }
// })