 /* ----- NAVIGATION BAR FUNCTION ----- */
 function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }
  


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Graphic Designer","Data Analyst","Machine embroiderer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  const form = event.target;
  const formData = new FormData(form); // Collect form data
  
  // Fetch request to send the form data
  fetch(form.action, {
      method: form.method, // Use the form method (POST)
      body: formData, // Send the form data
      headers: {
          'Accept': 'application/json' // Specify JSON format
      }
  }).then(response => {
      if (response.ok) {
          // Clear the form fields after successful submission
          form.reset();
          alert("Thank you for your message! We'll get back to you soon.");
      } else {
          alert("There was a problem with your submission. Please try again.");
      }
  }).catch(error => {
      alert("There was a problem with your submission. Please try again.");
  });
});

let currentIndex = 0;

function nextSlide() {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const totalImages = document.querySelectorAll('.image-container').length;

  if (currentIndex < totalImages - 1) {
      currentIndex++;
  } else {
      currentIndex = 0; // Go back to the first image
  }

  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevSlide() {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const totalImages = document.querySelectorAll('.image-container').length;

  if (currentIndex > 0) {
      currentIndex--;
  } else {
      currentIndex = totalImages - 1; // Go to the last image
  }

  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}
