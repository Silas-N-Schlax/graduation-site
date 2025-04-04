const password = ["38", "38", "40", "40", "37", "39", "37", "39", "66", "65", "13"]; 
let currentIndex = 0;


// Add an event listener to listen for keypresses
document.addEventListener("keydown", keyListener);

function keyListener(e) {
  let code = e.keyCode || e.which;

  if (code == password[currentIndex]) {
    currentIndex++;
    
    if (currentIndex === password.length) {
      window.location.href = "https://drive.google.com/file/d/1HzKo2AnSGb6w57V_iF77VN-fBrb1VeDk/view?usp=sharing";
  
      currentIndex = 0; 
    }
  } else {
    currentIndex = 0;
  }
}
