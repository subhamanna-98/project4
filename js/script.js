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

  const runCounter = (counter) => {
    counter.innerText = "0";
    const target = +counter.getAttribute("data-target");
    const speed = 200; // lower = faster

    const update = () => {
      const value = +counter.innerText;
      const increment = Math.ceil(target / speed);
      if (value < target) {
        counter.innerText = value + increment;
        setTimeout(update, 30);
      } else {
        counter.innerText = target;
      }
    };

    update();
  };

  // Counter starts only when visible on screen
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));



// client-trust-section
  $(document).ready(function() {
  $(".toggle-header").click(function() {
    
    $(this).toggleClass("active");

   
    $(this).next(".toggle-content").slideToggle(300);
  });
});

// property-section
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, 
    spaceBetween: 5,
    loop: true,
    speed: 500,

    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
     breakpoints: {
    1300: {
      slidesPerView: 3,
      
    },
     1200: {
      slidesPerView: 3,
      
    },
     1100: {
      slidesPerView: 3,
      
    },
     1000: {
      slidesPerView: 3,
     
    },
    900: {
      slidesPerView: 2,
     
    },
    800: {
      slidesPerView: 2,
     
    },
    700: {
      slidesPerView: 2,
      
    },
    600: {
      slidesPerView: 2,
     
    },
    500: {
      slidesPerView: 1,
      
    },
},
  });

// faq-section
  $(document).ready(function () {
  $(".faq-question").click(function () {

    // Close all other answers
    $(".faq-answer").not($(this).next()).slideUp();
    $(".faq-question").not(this).removeClass("active");

    // Toggle current one
    $(this).next(".faq-answer").slideToggle();
    $(this).toggleClass("active");
  });
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



const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;

next.addEventListener("click", () => {
  index++;
  if (index >= slides.length) index = 0;
  slider.style.transform = `translateX(-${index * 100}%)`;
});

prev.addEventListener("click", () => {
  index--;
  if (index < 0) index = slides.length - 1;
  slider.style.transform = `translateX(-${index * 100}%)`;
});


   
