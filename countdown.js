let countDownDate = new Date("Dec 17 , 2020 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("th_timer").innerHTML =
    '<span id="td">' +
    days +
    'Days </span> <span id="th">' +
    hours +
    'h </span> <span id="tu">' + " " +
    minutes +
    'min </span> <span id="tm">' +
    seconds +
    "sec </span>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("th_timer").innerHTML = "EXPIRED";
  }
}, 1000);
