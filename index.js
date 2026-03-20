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
        title: 'Bootstrap',
        description: 'Creating responsive, mobile-first websites with pre-built CSS components and utilities.',
        icon: 'fab fa-bootstrap'
      },
      {
        title: 'Python',
        description: 'Developing backend applications, data analysis, and automation scripts.',
        icon: 'fab fa-python'
      },
      {
        title: 'Django',
        description: 'Building robust web applications with Python-based framework for rapid development.',
        icon: 'fas fa-server'
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
        title: 'Signiqe',
        description: 'A modern professional web application developed for Signiqe to establish their digital presence.',
        uiuxDescription: '<ul><li><strong>Problem:</strong> Corporate websites often look cluttered, confusing visitors and making them leave.</li><li><strong>My Approach:</strong> I kept the design very clean with lots of white space. By picking just one main color scheme, I made sure the important buttons naturally stand out so users know exactly where to click.</li><li><strong>User Flow:</strong> See the homepage &rarr; Read main services &rarr; See the standout button &rarr; Sign up easily.</li></ul>',
        link: 'https://signiqe.com/',
        image: '/public/signiqe.png'
      },
      {
        title: 'Glamease',
        description: 'A senior project in progress, connecting beauty service providers with clients in Kenya through a user-friendly web platform.',
        uiuxDescription: '<ul><li><strong>Problem:</strong> Booking a local beauty salon can be stressful and disorganized over texts or calls.</li><li><strong>My Approach:</strong> I designed a friendly mobile layout. I used soft, rounded edges to make it feel welcoming, and picked distinct light colors to help users easily tell apart the salon dash from the client view.</li><li><strong>User Flow:</strong> Search on the map &rarr; Look at styles &rarr; Pick a time &rarr; Book with one tap.</li></ul>',
        link: 'https://glamex.vercel.app/',
        image: '/public/glamease.png'
      },
      {
        title: 'UEAB Research Grants',
        description: 'A proposed application system for the University of Eastern Africa, Baraton, streamlining the submission and evaluation of research grants.',
        uiuxDescription: '<ul><li><strong>Problem:</strong> Academic grant forms are usually huge walls of text that cause people to make mistakes.</li><li><strong>My Approach:</strong> I broke the long form into easy, smaller steps. I used clean, formal blue colors and sharp button edges because it makes the system look official and trustworthy for a university.</li><li><strong>User Flow:</strong> Open dashboard &rarr; Fill one step at a time &rarr; See progress bar &rarr; Submit safely.</li></ul>',
        link: 'https://ueab-research.vercel.app/',
        image: '/public/ueab-research.png'
      },
      {
        title: 'Older Persons Cash Transfer (OPCT)',
        description: 'A mockup for a Kenyan Older Persons Cash Transfer application system, streamlining social welfare payments.',
        uiuxDescription: '<ul><li><strong>Problem:</strong> Most digital apps are too hard for older people to read or tap accurately.</li><li><strong>My Approach:</strong> I designed this specifically for the elderly. I used huge text for easy reading, very bright colors so things pop clearly, and big pill-shaped buttons so they don\'t miss when tapping.</li><li><strong>User Flow:</strong> Secure login &rarr; Read big balance numbers &rarr; Tap giant button to send cash.</li></ul>',
        link: 'https://opct-ts.vercel.app/',
        image: '/public/opct.png'
      }
    ];

    const projectsGrid = document.querySelector('.projects__grid');
    projects.forEach(project => {
      const template = document.getElementById('project-card-template').content;
      const clone = template.cloneNode(true);
      
      // Update front details
      clone.querySelector('.project-card__image').src = project.image;
      clone.querySelector('.project-card__image').alt = `${project.title} screenshot`;
      clone.querySelector('.project-card__title').textContent = project.title;
      clone.querySelector('.project-card__description').textContent = project.description;
      
      // Update back details
      const uiuxDesc = clone.querySelector('.project-card__uiux-description');
      if (uiuxDesc) uiuxDesc.innerHTML = project.uiuxDescription;
      
      // Assign links to both buttons
      const links = clone.querySelectorAll('.project-card__link');
      links.forEach(link => {
        link.href = project.link;
        link.setAttribute('rel', 'noopener noreferrer');
      });
      
      projectsGrid.appendChild(clone);
    });
  }
});