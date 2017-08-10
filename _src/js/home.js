var airplaneEntryWaypoint = new Waypoint({
  element: document.querySelector('#airplane-container'),
  handler: function(direction) {
    document.body.classList.add('airplane-in-view');
  },
  offset: '50%'
});

var airplaneExitWaypoint = new Waypoint({
  element: document.querySelector('#airplane-container'),
  handler: function(direction) {
    console.log('25px from top')
  },
  offset: '33%'
})