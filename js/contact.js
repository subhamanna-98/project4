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


// loading-screan
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 5000); // 20 seconds
});

// form-validation

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("msg").value.trim();
    let err = document.getElementById("error-msg");

    // Regex
    let regexUpper = /[A-Z]/;
    let regexLower = /[a-z]/;
    let regexSpecial = /[!@#$%^&*(),.?":{}|<>]/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation
    if (!regexUpper.test(name) || !regexLower.test(name)) {
      err.textContent = "Name must contain at least 1 uppercase and 1 lowercase letter.";
      return;
    }

    if (!emailPattern.test(email)) {
      err.textContent = "Please enter a valid email address.";
      return;
    }

    if (
      !regexUpper.test(msg) ||
      !regexLower.test(msg) ||
      !regexSpecial.test(msg)
    ) {
      err.textContent =
        "Message must contain uppercase, lowercase, and 1 special character.";
      return;
    }

    // Success
    err.style.color = "green";
    err.textContent = "Form submitted successfully!";
    this.submit(); // Form submit hoye jabe
  });
