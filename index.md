---
layout: default
---
# home page!

<button id="ajaxButton" type="button">Get the Team!</button>

  <script>
  (function() {
    var httpRequest;
    document.getElementById("ajaxButton").addEventListener('click', makeRequest);

    function makeRequest() {
      httpRequest = new XMLHttpRequest();

      if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
      }
      httpRequest.onreadystatechange = alertContents;
      httpRequest.open('GET', '/api/team.json');
      httpRequest.send();
    }

    function alertContents() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var target = document.createElement('pre');
          target.innerHTML = httpRequest.responseText;
          document.body.append(target);
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
  })();
  </script>