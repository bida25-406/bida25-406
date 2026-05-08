console.log("JavaScript is connected!");
let index = 0;
function showNextImage() {
  const images = document.querySelectorAll(".gallery img");
  images.forEach(img => img.style.display = "none");
  images[index].style.display = "block";
  index = (index + 1) % images.length;
}
setInterval(showNextImage, 3000);
window.onload = function() {
  setTimeout(() => {
    alert("💅 Special Offer: Free manicure with every pedicure this weekend!");
  }, 2000);
};
document.addEventListener("DOMContentLoaded", function() {
  
  const bookingForm = document.getElementById("bookingForm");

  bookingForm.addEventListener("submit", function(e) {  
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    if (name.length < 2) {
      alert("Please enter your full name.");
      e.preventDefault();
      return;
    }

    if (phone.length < 8 || isNaN(phone)) {
      alert("Please enter a valid phone number.");
      e.preventDefault();
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }
    alert("🎉 Thank you, " + name + "! Your booking request has been submitted.");
  });
});
const toggleButton = document.getElementById('theme-toggle'); 

toggleButton.addEventListener('click', function() { 
    document.body.classList.toggle('dark-mode'); 
    if (document.body.classList.contains('dark-mode')) { 
        toggleButton.textContent = 'Light Mode'; 
    } else { 
        toggleButton.textContent = 'Dark Mode'; 
    } 
}); 
