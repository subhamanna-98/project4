// navbar-section
const closeBtn = document.querySelector(".close-btn");
const navbarCollesped = document.querySelector(".navbar-collesped");
const body = document.querySelector(".body");
const overLay = document.querySelector(".over-lay");
let close = true;

closeBtn.addEventListener("click", () =>{
    if(close==true){
        close = false;
        navbarCollesped.style.right = "0%";
        closeBtn.classList.add("open");
        body.style.overflow = "hiden";
        overLay.classList.add("active");
    }else{
        close = true;
        navbarCollesped.style.right = "-100%";
        closeBtn.classList.remove("open");
        body.style.overflow = "visible";
        overLay.classList.remove("active");
    }
});

// pop-up-section
const contactBtn = document.querySelector(".contact-btn");
const popupForm = document.getElementById("popupForm");
const overlay = document.getElementById("overlay");
const signInClose = document.querySelector(".closein-close");
const formTitle = document.getElementById("formTitle");
const nameField = document.getElementById("nameField");
const toggleText = document.getElementById("toggleText");

let isSignUp = false;

// Show form
contactBtn.addEventListener("click", () => {
  popupForm.classList.add("active");
  overlay.classList.add("active");
});

// Close form
signInClose.addEventListener("click", () => {
  popupForm.classList.remove("active");
  overlay.classList.remove("active");
});
overlay.addEventListener("click", () => {
  popupForm.classList.remove("active");
  overlay.classList.remove("active");
});

// Toggle Sign In / Sign Up
toggleText.addEventListener("click", (e) => {
  if (e.target.id === "toggleForm") {
    isSignUp = !isSignUp;
    if (isSignUp) {
      formTitle.textContent = "Sign Up";
      nameField.style.display = "block";
      toggleText.innerHTML = 'Already have an account? <span id="toggleForm">Sign In</span>';
    } else {
      formTitle.textContent = "Sign In";
      nameField.style.display = "none";
      toggleText.innerHTML = 'Don’t have an account? <span id="toggleForm">Sign Up</span>';
    }
  }
});
 

  // counter-sec

  const counters = document.querySelectorAll(".counter");
  const section = document.querySelector("#counter-section");
  let started = false;

  function startCounter() {
    if (started) return;
    started = true;

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const speed = 50; // small number = faster
      let count = 0;

      const updateCount = () => {
        const inc = target / 100;
        if (count < target) {
          count += inc;
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }

  // trigger when section visible
  window.addEventListener("scroll", () => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerHeight = window.innerHeight - 150;
    if (sectionTop < triggerHeight) {
      startCounter();
    }
  });
 


// form-validation

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop default submission
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const errorMsg = document.getElementById("error-msg");

  const namePattern = /(?=.*[A-Z])(?=.*[a-z])/; // 1 uppercase + 1 lowercase
  const emailPattern = /[!@#$%^&*(),.?":{}|<>_-]/; // at least 1 special char

  if (!namePattern.test(name)) {
    errorMsg.textContent = "Name must contain at least one uppercase and one lowercase letter.";
    return;
  }

  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Email must contain at least one special character.";
    return;
  }

  errorMsg.style.color = "#ffffff";
  errorMsg.textContent = "Form submitted successfully!";
  this.reset(); // optional: clear form
});