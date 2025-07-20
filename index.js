document.addEventListener('DOMContentLoaded', () => {
  // Render Navbar
  const navbarTemplate = document.getElementById('navbar-template').content;
  const navbarRoot = document.getElementById('navbar-root');
  navbarRoot.appendChild(navbarTemplate.cloneNode(true));

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

  // Project Cards (Only for projects.html)
  if (document.querySelector('.projects__grid')) {
    const projects = [
      {
        title: 'Project One',
        description: 'A web app built with vanilla JS and CSS animations.',
        link: 'https://example.com/project1'
      },
      {
        title: 'Project Two',
        description: 'A React-based dashboard with real-time data.',
        link: 'https://example.com/project2'
      },
      {
        title: 'Project Three',
        description: 'A full-stack e-commerce site using Next.js.',
        link: 'https://example.com/project3'
      }
    ];

    const projectsGrid = document.querySelector('.projects__grid');
    projects.forEach(project => {
      const template = document.getElementById('project-card-template').content;
      const clone = template.cloneNode(true);
      clone.querySelector('.project-card__title').textContent = project.title;
      clone.querySelector('.project-card__description').textContent = project.description;
      clone.querySelector('.project-card__link').href = project.link;
      projectsGrid.appendChild(clone);
    });
  }
});