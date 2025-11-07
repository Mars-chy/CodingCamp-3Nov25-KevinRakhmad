
window.onload = function() {
  const name = prompt("Masukkan nama Anda:");
  if (name) {
    document.getElementById("welcome-text").innerText = `Hi ${name}, Welcome To Website`;
  }
};

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("messageText").value.trim();
  const resultBox = document.getElementById("result");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,15}$/;

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Please fill in all fields!");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert("Phone number must be 10–15 digits!");
    return;
  }

  resultBox.innerHTML = `
    <h3>Form Submission Result</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  this.reset();
});


const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});