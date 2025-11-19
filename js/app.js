// loading-screan
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 5000); // 20 seconds
});


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


// counter-section

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
$(function () {
    $(".faq-question, .faq-arrow").on("click", function () {

        var $item = $(this).closest(".faq-item");
        var $content = $item.find(".faq-content");
        var $arrow = $item.find(".faq-arrow img");

        // toggle only this item
        $content.stop(true, true).slideToggle(150);
        $arrow.toggleClass("open");

        // close others
        $(".faq-item").not($item).find(".faq-content").slideUp(150);
        $(".faq-item").not($item).find(".faq-arrow img").removeClass("open");
    });
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
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name Validation (1 uppercase & 1 lowercase)
    if (!regexUpper.test(name) || !regexLower.test(name)) {
        err.style.color = "red";
        err.textContent = "Name must contain at least 1 uppercase and 1 lowercase letter.";
        return;
    }

    // Email Validation
    if (!emailPattern.test(email)) {
        err.style.color = "red";
        err.textContent = "Please enter a valid email address.";
        return;
    }

    // Message validation ONLY empty check
    if (msg === "") {
        err.style.color = "red";
        err.textContent = "Message cannot be empty.";
        return;
    }

    // SUCCESS
    err.style.color = "green";
    err.textContent = "Form submitted successfully!";

    // Now allow page refresh
    this.submit();  
});



// galary-section
const swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  speed: 500,
  navigation: {
    nextEl: ".next-btn1",
    prevEl: ".prev-btn1",
  },
   breakpoints: {
    1300: {
      slidesPerView: 2,
      
    },
     1200: {
      slidesPerView: 2,
      
    },
     1100: {
      slidesPerView: 2,
      
    },
     1000: {
      slidesPerView: 2,
     
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
      slidesPerView: 1,
     
    },
    500: {
      slidesPerView: 1,
      
    },
     400: {
      slidesPerView: 1,
      
    },
    300: {
      slidesPerView: 1,
      
    },
},
});