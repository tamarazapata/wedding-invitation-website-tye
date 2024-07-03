const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset*(-0.3)-100 + "px";
})


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=3100;
    parallax1.style.backgroundPositionY = offset*(0.1) + "px";
})

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=4800;
    parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
})

function myFunction() {
    document.getElementById("check").checked = false;
  }


  
function reveal() {
var reveals = document.querySelectorAll(".reveal");
  
for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);

document.addEventListener('DOMContentLoaded', function() {

  // Selects the first element with the class '.confetti-button' as the target button.
const button = document.querySelector('.confetti-button');  // You can change the class, just make sure it is defined in the module also.  

  // Adds an event listener for the 'click' event on the targeted button.
  button.addEventListener('click', function(event) {
    // Retrieves the position and size of the button to calculate where the confetti should appear.
    const rect = button.getBoundingClientRect();

    // Calculates the horizontal (x) center of the button.
    const x = (rect.left + rect.right) / 2;

    // Calculates the vertical (y) center of the button.
    const y = (rect.top + rect.bottom) / 2;

    // Configures the settings for the confetti effect.
    const confettiSettings = {
      particleCount: 100, // Defines the number of confetti particles.
      spread: 70,         // Sets the spread angle of the confetti.
      // Specifies the origin point for the confetti effect based on the button's location.
      origin: { x: x / window.innerWidth, y: y / window.innerHeight }
    };

    // Triggers the confetti effect with the defined settings when the button is clicked.
    confetti(confettiSettings);
  });
});