// Set the date we're counting down to
  document.title = "days till christmas day";
  var countDownDate = new Date("Dec 24, 2018 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
if(days === 1){
  days = days + " day, ";
}else{
  days = days + " days, ";
}
  if(hours === 1){
    hours = hours + " hour, ";
  }else{
    hours = hours + " hours, ";
  }
  if(minutes === 1){
    minutes = minutes + " minute and ";
  }else{
    minutes = minutes + " minutes and ";
  }
 if(seconds === 1){
   seconds = seconds + " second until Christmas Day";
 }else{
   seconds = seconds + " seconds until Christmas Day";
 }
  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + hours + minutes + seconds;
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "merry christmas";
  }
}, 1000);
