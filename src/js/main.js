document.addEventListener("DOMContentLoaded", () => {
    
    // Render Navbar
    const navContainer = document.getElementById('navbar-container');
    if (navContainer && typeof renderNavbar === 'function') {
        const basePath = navContainer.getAttribute('data-basepath') || './';
        navContainer.innerHTML = renderNavbar(basePath);
    }

    // Render Footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer && typeof renderFooter === 'function') {
        const basePath = footerContainer.getAttribute('data-basepath') || './';
        footerContainer.innerHTML = renderFooter(basePath);
    }

    // Active Link Highlighting
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('#navbar a.nav-link');
    
    // Simplistic check for active link based on URL
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            // Check if current URL ends with this href
            const cleanHref = href.replace(/(\.\.\/)+/g, '').replace('./', '');
            if (currentPath.endsWith(cleanHref) || (cleanHref === 'index.html' && currentPath.endsWith('/'))) {
                link.classList.remove('text-slate-600');
                link.classList.add('text-blue-600', 'border-b-2', 'border-blue-600');
                // For mobile links that don't have border-b-2
                if (link.classList.contains('block')) {
                    link.classList.add('bg-slate-50', 'text-blue-700');
                }
            } else {
                link.classList.add('text-slate-600');
                link.classList.remove('border-b-2', 'border-blue-600', 'bg-slate-50', 'text-blue-700');
            }
        }
    });

    // Mobile Menu Toggle Logic
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            const icon = btn.querySelector('i');
            if (menu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }

    // Initialize AOS animations AFTER components are loaded
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-in-out-cubic',
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('nav-scrolled');
                navbar.classList.remove('border-transparent');
                navbar.classList.add('border-slate-200');
            } else {
                navbar.classList.remove('nav-scrolled');
                navbar.classList.remove('border-slate-200');
                navbar.classList.add('border-transparent');
            }
        });
    }
});