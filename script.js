document.addEventListener('DOMContentLoaded', () => {

  /**
   * Initializes Intersection Observer to add a 'is-visible' class to sections 
   * when they scroll into the viewport, triggering CSS animations.
   */
  const initScrollAnimations = () => {
      const sections = document.querySelectorAll('.section');
      const options = {
          threshold: 0.1, // Start animation when 10% of the section is visible
          rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  observer.unobserve(entry.target);
              }
          });
      }, options);

      sections.forEach(section => {
          observer.observe(section);
      });
  };

  /**
   * Animates skill progress bars when they become visible.
   */
  const initSkillBars = () => {
      const skillCards = document.querySelectorAll('.skill-card');
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const card = entry.target;
                  const progressFill = card.querySelector('.progress-fill');
                  const percentText = card.querySelector('.percent');
                  const targetPercent = parseInt(progressFill.getAttribute('data-percent'), 10);
                  
                  // Trigger the CSS transition for the progress bar width
                  progressFill.style.width = targetPercent + '%';

                  // Animate the percentage number
                  let currentPercent = 0;
                  const interval = setInterval(() => {
                      if (currentPercent >= targetPercent) {
                          clearInterval(interval);
                          percentText.textContent = targetPercent + '%';
                      } else {
                          currentPercent++;
                          percentText.textContent = currentPercent + '%';
                      }
                  }, 20); // Slightly adjusted speed for smoothness
                  
                  observer.unobserve(card);
              }
          });
      }, { threshold: 0.5 });

      skillCards.forEach(card => observer.observe(card));
  };

  /**
   * Handles opening and closing of project modals using a CSS class toggle.
   */
  const initModals = () => {
      const modalLinks = document.querySelectorAll('.project-link');
      const modals = document.querySelectorAll('.modal');

      const openModal = (modalId) => {
          const modal = document.getElementById(modalId);
          if (modal) {
              modal.classList.add('active'); // Use classList.add to show the modal
          }
      };

      const closeModal = (modal) => {
          modal.classList.remove('active'); // Use classList.remove to hide the modal
      };

      modalLinks.forEach(link => {
          link.addEventListener('click', (e) => {
              e.preventDefault();
              const modalId = link.getAttribute('data-modal');
              openModal(modalId);
          });
      });

      modals.forEach(modal => {
          const closeBtn = modal.querySelector('.close');
          if (closeBtn) {
              closeBtn.addEventListener('click', () => closeModal(modal));
          }
          modal.addEventListener('click', (e) => {
              // Close if the click is on the modal background itself, not the content
              if (e.target === modal) {
                  closeModal(modal);
              }
          });
      });
  };

  /**
   * Creates and animates a dynamic bubble background on the hero canvas.
   */
  const initCanvasAnimation = () => {
      const canvas = document.getElementById('hero-canvas');
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      const bubbles = [];

      const resizeCanvas = () => {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
      };
      window.addEventListener('resize', resizeCanvas);

      for (let i = 0; i < 50; i++) {
          bubbles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              r: Math.random() * 8 + 2,
              dx: (Math.random() - 0.5) * 0.5, // Slower bubble speed
              dy: (Math.random() - 0.5) * 0.5,
          });
      }

      function animate() {
          ctx.clearRect(0, 0, width, height);

          bubbles.forEach(b => {
              ctx.beginPath();
              ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
              ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
              ctx.shadowBlur = 15;
              ctx.shadowColor = "#3DDC84";
              ctx.fill();

              b.x += b.dx;
              b.y += b.dy;

              if (b.x - b.r > width) b.x = -b.r;
              else if (b.x + b.r < 0) b.x = width + b.r;

              if (b.y - b.r > height) b.y = -b.r;
              else if (b.y + b.r < 0) b.y = height + b.r;
          });

          requestAnimationFrame(animate);
      }

      animate();
  };

  // Initialize all functionalities
  initScrollAnimations();
  initSkillBars();
  initModals();
  initCanvasAnimation();
});