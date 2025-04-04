// const targetDate = new Date("2025-06-07T02:00:00Z").getTime();
const targetDate = new Date("2025-06-07T18:00:00Z").getTime();


const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

 
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((distance % (1000)) / 100);

 
  document.getElementById("countdown").innerHTML = 
    "Time Till Graduation: " + days + ":" + hours + ":" + minutes + ":" + seconds;


  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "GRADUATED!";
  }
}, 1000);
