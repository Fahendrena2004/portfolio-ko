const renderNavbar = (basePath) => `
<nav id="navbar" class="fixed w-full z-50 glass-panel border-b border-transparent transition-all duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <a href="${basePath}index.html" class="text-slate-900 font-bold text-2xl tracking-tighter" data-aos="fade-down">CF<span class="text-blue-500">.</span></a>
            
            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center">
                <button id="mobile-menu-btn" class="text-slate-600 hover:text-blue-600 focus:outline-none transition">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
            
            <!-- Desktop Menu -->
            <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-8" data-aos="fade-down" data-aos-delay="100">
                    <a href="${basePath}index.html" class="nav-link text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Profil</a>
                    <a href="${basePath}src/pages/about.html" class="nav-link text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">À Propos</a>
                    <a href="${basePath}src/pages/skills.html" class="nav-link text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Compétences</a>
                    <a href="${basePath}src/pages/experience.html" class="nav-link text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Expériences</a>
                    <a href="${basePath}src/pages/education.html" class="nav-link text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Formations</a>
                    <a href="${basePath}src/pages/projects.html" class="nav-link text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Projets</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg absolute w-full transition-all">
        <div class="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <a href="${basePath}index.html" class="nav-link block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition">Profil</a>
            <a href="${basePath}src/pages/about.html" class="nav-link block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition">À Propos</a>
            <a href="${basePath}src/pages/skills.html" class="nav-link block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition">Compétences</a>
            <a href="${basePath}src/pages/experience.html" class="nav-link block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition">Expériences</a>
            <a href="${basePath}src/pages/education.html" class="nav-link block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition">Formations</a>
            <a href="${basePath}src/pages/projects.html" class="nav-link block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition">Projets</a>
        </div>
    </div>
</nav>
`;

const renderFooter = (basePath) => `
<footer class="bg-slate-100 py-8 md:py-12 border-t border-slate-200 mt-auto">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left" data-aos="fade-right">
            <a href="${basePath}index.html" class="text-slate-900 font-bold text-xl tracking-tighter block mb-2">CF<span class="text-blue-500">.</span></a>
            <p class="text-slate-500 text-sm">
                &copy; 2026 Christian Fahendrena. Tous droits réservés.
            </p>
        </div>
        
        <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-6 md:mt-0" data-aos="fade-left">
            <a href="mailto:christianfahendrena@gmail.com" class="flex items-center justify-center gap-2 text-slate-500 hover:text-blue-600 transition">
                <i class="fas fa-envelope text-blue-500"></i>
                <span class="text-sm font-medium">christianfahendrena@gmail.com</span>
            </a>
            <a href="tel:+261387708450" class="flex items-center justify-center gap-2 text-slate-500 hover:text-blue-600 transition">
                <i class="fas fa-phone text-blue-500"></i>
                <span class="text-sm font-medium">038 77 084 50</span>
            </a>
            <a href="https://github.com/Fahendrena2004" target="_blank" class="flex items-center justify-center gap-2 text-slate-500 hover:text-blue-600 transition">
                <i class="fab fa-github text-blue-500"></i>
                <span class="text-sm font-medium">Fahendrena2004</span>
            </a>
        </div>
    </div>
</footer>
`;