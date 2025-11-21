 // Lógica para el cambio de estilo de la Navbar al hacer scroll (NUEVO)
const navbar = document.getElementById('main-navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Si el scroll es mayor a 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Lógica para el botón de "Subir al inicio"
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Lógica para el menú de redes sociales en móvil
const socialToggle = document.getElementById('social-toggle');
const socialLinksMobile = document.getElementById('social-links-mobile');

socialToggle.addEventListener('click', () => {
    socialLinksMobile.classList.toggle('show');
});

// NUEVO: Cerrar el menú de navegación móvil al hacer click en un enlace
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Verificar si el menú está visible (para pantallas pequeñas)
        if (menuToggle.classList.contains('show')) {
            bsCollapse.hide();
        }
    });
});