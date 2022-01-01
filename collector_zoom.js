//------------------------//
// ZOOM FUNCTION CONTROLS //
//------------------------//

    var zoom = 1;
    var zoomStep = 0.1;

    document.getElementById("zoomIn").addEventListener("click", function() {
      zoom += zoomStep;
      document.getElementById("container").style.transform = "scale(" + zoom + ")";
    });

    document.getElementById("zoomOut").addEventListener("click", function() {
      if (zoom > zoomStep) {
        zoom -= zoomStep;
        document.getElementById("container").style.transform = "scale(" + zoom + ")";
      }
    });