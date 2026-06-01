const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.req-card, .benefit-card, .doc-item, .inst-card, .email-card, .contact-block').forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });