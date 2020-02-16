//jshint esversion: 6

setInterval(() => {
  setTimeout(function() {
    if (arrow) {
      document.getElementById("arrow").innerHTML = "🡻";
      document.getElementById("arrow").style.opacity = 0.1;
      arrow = false;
    } else {
      document.getElementById("arrow").innerHTML = "🡻";
      document.getElementById("arrow").style.opacity = 1;
      arrow = true;
    }
  }, 0);

}, 400);
