function createParticles() {
  const container = document.getElementById('particles-container');
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    
    particle.style.animationDelay = `${Math.random() * 15}s`;
    
    container.appendChild(particle);
  }
}

function showWelcomeNotification() {
  const notif = document.getElementById('notif-welcome');
  setTimeout(() => {
    notif.style.animation = 'slideNotif 5s ease-out forwards';
    setTimeout(() => {
      notif.style.animation = '';
    }, 5000);
  }, 1000);
}

window.addEventListener('load', () => {
  createParticles();
  showWelcomeNotification();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});