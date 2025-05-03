
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        header.classList.add('sticky');
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.classList.remove('sticky');
        header.style.backgroundColor = 'transparent';
    }
    
    lastScroll = currentScroll;
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


const form = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const privacyCheckbox = document.getElementById('privacy');
const submitButton = form.querySelector('.submit-btn');

nameInput.setAttribute('name', 'name');
emailInput.setAttribute('name', 'email');
privacyCheckbox.setAttribute('name', 'privacy');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
  
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const isPrivacyChecked = privacyCheckbox.checked;
  
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('privacyError').style.display = 'none';
  
    let isValid = true;
  
    if (!nameValue) {
      document.getElementById('nameError').textContent = 'Please enter your name';
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
    }
  
    if (!emailValue || !isValidEmail(emailValue)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    }
  
    if (!isPrivacyChecked) {
      document.getElementById('privacyError').textContent = 'You must accept the Privacy Policy';
      document.getElementById('privacyError').style.display = 'block';
      isValid = false;
    }
  
    if (isValid) {
      
      form.reset();
      const successMessage = document.getElementById('successMessage');
  successMessage.classList.add('show');

  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 5000);
}
  });

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const buttons = document.querySelectorAll('.btn, .feature-btn, .footer-btn, .submit-btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.3s ease';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});


document.querySelectorAll('.btn, .footer-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.querySelector('.contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});


const burgerMenu = document.querySelector('.burger-menu');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    mainNav.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        mainNav.classList.remove('active');
    });
});


document.addEventListener('click', (e) => {
    if (!burgerMenu.contains(e.target) && !mainNav.contains(e.target)) {
        burgerMenu.classList.remove('active');
        mainNav.classList.remove('active');
    }
}); 