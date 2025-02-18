// script.js

document.addEventListener('DOMContentLoaded', function () {
  const navbarLinks = document.querySelectorAll('.navbar a');
  
  // Smooth scrolling for navbar links
  navbarLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetSection = document.querySelector(this.getAttribute('href'));
          if (targetSection) {
              targetSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });

  // Back to top button
  const backToTop = document.createElement('button');
  backToTop.innerText = '↑';
  backToTop.classList.add('back-to-top');
  document.body.appendChild(backToTop);

  backToTop.style.position = 'fixed';
  backToTop.style.bottom = '20px';
  backToTop.style.right = '20px';
  backToTop.style.padding = '15px 20px';
  backToTop.style.border = 'none';
  backToTop.style.borderRadius = '50%';
  backToTop.style.backgroundColor = '#1f4037';
  backToTop.style.color = '#fff';
  backToTop.style.fontSize = '20px';
  backToTop.style.cursor = 'pointer';
  backToTop.style.display = 'none';
  backToTop.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

  backToTop.addEventListener('mouseover', () => {
      backToTop.style.backgroundColor = '#99f2c8';
  });

  backToTop.addEventListener('mouseout', () => {
      backToTop.style.backgroundColor = '#1f4037';
  });

  backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
          backToTop.style.display = 'block';
      } else {
          backToTop.style.display = 'none';
      }

      // Highlight active section in navbar
      let currentSection = '';
      document.querySelectorAll('section').forEach(section => {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
              currentSection = section.getAttribute('id');
          }
      });
      navbarLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(currentSection)) {
              link.classList.add('active');
          }
      });

      // Update scroll progress bar
      const progressBar = document.querySelector('.progress-bar');
      if (progressBar) {
          const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
          progressBar.style.width = scrollProgress + '%';
      }
  });

  // Scroll Progress Bar
  const progressBarContainer = document.createElement('div');
  progressBarContainer.classList.add('progress-bar-container');
  progressBarContainer.style.position = 'fixed';
  progressBarContainer.style.top = '0';
  progressBarContainer.style.left = '0';
  progressBarContainer.style.width = '100%';
  progressBarContainer.style.height = '5px';
  progressBarContainer.style.backgroundColor = '#f1f1f1';
  progressBarContainer.style.zIndex = '9999';
  document.body.appendChild(progressBarContainer);

  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  progressBar.style.height = '100%';
  progressBar.style.backgroundColor = '#3a7bd5';
  progressBarContainer.appendChild(progressBar);

  // Modal for contact button
  const contactButton = document.createElement('button');
  contactButton.innerText = 'Contact Us';
  contactButton.classList.add('contact-button');
  document.body.appendChild(contactButton);

  contactButton.style.position = 'fixed';
  contactButton.style.bottom = '80px';
  contactButton.style.left = '20px';
  contactButton.style.padding = '15px 20px';
  contactButton.style.border = 'none';
  contactButton.style.borderRadius = '50%';
  contactButton.style.backgroundColor = '#3a7bd5';
  contactButton.style.color = '#fff';
  contactButton.style.fontSize = '18px';
  contactButton.style.cursor = 'pointer';
  contactButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  
  contactButton.addEventListener('click', () => {
      alert('You can contact us at: contact@architect.com');
  });
  
  // Adding a little delay to show contact button after the page loads
  setTimeout(() => {
      contactButton.style.display = 'block';
  }, 2000);
});
