const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('main section[id]');
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

const closeNavigation = () => {
  if (!navToggle || !mainNav) return;

  navToggle.setAttribute('aria-expanded', 'false');
  mainNav.classList.remove('is-open');
};

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    mainNav.classList.toggle('is-open', !isOpen);
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-shell')) {
      closeNavigation();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavigation();
    }
  });
}

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', isActive);
  });
};

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('href')?.replace('#', '');
    if (!targetId) return;

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      setActiveLink(targetId);
      closeNavigation();
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    const visibleEntries = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visibleEntries.length > 0) {
      setActiveLink(visibleEntries[0].target.id);
    }
  },
  {
    rootMargin: '-20% 0px -45% 0px',
    threshold: [0.2, 0.4, 0.6, 0.8],
  }
);

sections.forEach((section) => observer.observe(section));

const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
  const skillCards = skillsSection.querySelectorAll('.skill-card');
  skillCards.forEach((card, index) => {
    card.style.setProperty('--index', index);
  });

  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillsSection.classList.add('is-visible');
          skillsObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  skillsObserver.observe(skillsSection);
}

const experienceSection = document.querySelector('.experience-section');
if (experienceSection) {
  const experienceItems = experienceSection.querySelectorAll('.experience-item');
  experienceItems.forEach((item, index) => {
    item.style.setProperty('--index', index);
  });

  const experienceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          experienceSection.classList.add('is-visible');
          experienceObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  experienceObserver.observe(experienceSection);
}

const educationSection = document.querySelector('.education-section');
if (educationSection) {
  const educationItems = educationSection.querySelectorAll('.education-item');
  educationItems.forEach((item, index) => {
    item.style.setProperty('--index', index);
  });

  const educationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          educationSection.classList.add('is-visible');
          educationObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  educationObserver.observe(educationSection);
}

const contactSection = document.querySelector('.contact-section');
if (contactSection) {
  const animatedGroups = contactSection.querySelectorAll('.contact-subsection');
  const animatedItems = contactSection.querySelectorAll('.contact-detail, .social-link');

  animatedGroups.forEach((group, index) => {
    group.style.setProperty('--index', index);
  });

  animatedItems.forEach((item, index) => {
    item.style.setProperty('--index', index);
  });

  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactSection.classList.add('is-visible');
          contactObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  contactObserver.observe(contactSection);
}

const projectsSection = document.querySelector('#projects');
if (projectsSection) {
  const webCards = projectsSection.querySelectorAll('.project-grid-web .project-card');
  const mobileCards = projectsSection.querySelectorAll('.project-grid-mobile .project-card');

  webCards.forEach((card, index) => {
    card.style.setProperty('--index', index);
  });

  mobileCards.forEach((card, index) => {
    card.style.setProperty('--index', index);
  });

  const projectsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectsSection.classList.add('is-visible');
          projectsObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  projectsObserver.observe(projectsSection);
}
