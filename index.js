document.addEventListener('DOMContentLoaded', () => {
  // Render Navbar
  const navbarTemplate = document.getElementById('navbar-template').content;
  const navbarRoot = document.getElementById('navbar-root');
  navbarRoot.appendChild(navbarTemplate.cloneNode(true));

  // Render Footer
  const footerTemplate = document.getElementById('footer-template').content;
  const footerRoot = document.getElementById('footer-root');
  footerRoot.appendChild(footerTemplate.cloneNode(true));

  // Update Copyright Year
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.querySelector('.footer__copyright');
  copyrightElement.textContent = `Faith Chepkemoi ©2025${currentYear > 2025 ? ' - ' + currentYear : ''}. All Rights Reserved`;

  // Hamburger Menu Toggle
  const toggleButton = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');
  toggleButton.addEventListener('click', () => {
    menu.classList.toggle('navbar__menu--open');
    toggleButton.querySelector('.navbar__toggle-icon').textContent = 
      menu.classList.contains('navbar__menu--open') ? '✕' : '☰';
  });

  // Close Menu on Link Click (Mobile)
  document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('navbar__menu--open')) {
        menu.classList.remove('navbar__menu--open');
        toggleButton.querySelector('.navbar__toggle-icon').textContent = '☰';
      }
    });
  });

  // Highlight Active Link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link').forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('navbar__link--active');
    }
  });

  // Skill Cards (Only for index.html)
  if (document.querySelector('.skills__grid')) {
    const skills = [
      {
        title: 'Adobe Lightroom',
        description: 'Editing and organizing photos with professional-grade tools for color correction and visual enhancement.',
        icon: 'fas fa-camera'
      },
      {
        title: 'Adobe Photoshop',
        description: 'Creating and manipulating images for graphic design, digital art, and photo retouching.',
        icon: 'fas fa-image'
      },
      {
        title: 'Adobe XD',
        description: 'Designing and prototyping user interfaces for web and mobile applications.',
        icon: 'fas fa-drafting-compass'
      },
      {
        title: 'Figma',
        description: 'Collaborating on UI/UX design with real-time, cloud-based prototyping and design systems.',
        icon: 'fas fa-object-group'
      },
      {
        title: 'Git and GitHub',
        description: 'Managing version control and collaborating on code with distributed teams.',
        icon: 'fab fa-github'
      },
      {
        title: 'React',
        description: 'Building dynamic, component-based user interfaces for modern web applications.',
        icon: 'fab fa-react'
      },
      {
        title: 'JavaScript',
        description: 'Developing interactive client-side features and dynamic web functionalities.',
        icon: 'fab fa-js'
      },
      {
        title: 'HTML',
        description: 'Structuring content for websites with semantic and accessible markup.',
        icon: 'fab fa-html5'
      },
      {
        title: 'CSS',
        description: 'Styling web interfaces with responsive and visually appealing designs.',
        icon: 'fab fa-css3-alt'
      },
      {
        title: 'Flutter',
        description: 'Developing cross-platform mobile applications with a single codebase.',
        icon: 'fas fa-mobile-alt'
      },
      {
        title: 'MySQL',
        description: 'Managing relational databases for efficient data storage and retrieval.',
        icon: 'fas fa-database'
      },
      {
        title: 'WordPress',
        description: 'Creating and managing websites with customizable themes and plugins.',
        icon: 'fab fa-wordpress'
      }
    ];

    const skillsGrid = document.querySelector('.skills__grid');
    skills.forEach(skill => {
      const template = document.getElementById('skill-card-template').content;
      const clone = template.cloneNode(true);
      clone.querySelector('.skill-card__icon').className = `skill-card__icon ${skill.icon}`;
      clone.querySelector('.skill-card__title').textContent = skill.title;
      clone.querySelector('.skill-card__description').textContent = skill.description;
      skillsGrid.appendChild(clone);
    });
  }

  // Project Cards (Only for projects.html)
  if (document.querySelector('.projects__grid')) {
    const projects = [
      {
        title: 'Glamease',
        description: 'A senior project in progress, connecting beauty service providers with clients in Kenya through a user-friendly web platform.',
        link: 'https://glamease.vercel.app/',
        image: '/public/glamease.png'
      },
      {
        title: 'Older Persons Cash Transfer (OPCT)',
        description: 'A mockup for a Kenyan Older Persons Cash Transfer application system, streamlining social welfare payments.',
        link: 'https://opct-ts.vercel.app/',
        image: '/public/opct.png'
      },
      {
        title: 'UEAB Innovations Week',
        description: 'A proposed application system for the University of Eastern Africa, Baraton’s Innovations Week, showcasing student projects and events.',
        link: 'https://ueabinnovation.vercel.app/',
        image: '/public/ueab-innovation.png'
      }
    ];

    const projectsGrid = document.querySelector('.projects__grid');
    projects.forEach(project => {
      const template = document.getElementById('project-card-template').content;
      const clone = template.cloneNode(true);
      clone.querySelector('.project-card__image').src = project.image;
      clone.querySelector('.project-card__image').alt = `${project.title} screenshot`;
      clone.querySelector('.project-card__title').textContent = project.title;
      clone.querySelector('.project-card__description').textContent = project.description;
      clone.querySelector('.project-card__link').href = project.link;
      clone.querySelector('.project-card__link').setAttribute('rel', 'noopener noreferrer');
      projectsGrid.appendChild(clone);
    });
  }
});