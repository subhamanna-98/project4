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