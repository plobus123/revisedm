// Initialize Lucide Icons
function initIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initIcons();
    setTimeout(initIcons, 500);
});

// --- MOBILE MENU ---
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenu = document.getElementById('close-mobile-menu');

function toggleMenu() {
    if (mobileMenu) {
        if (mobileMenu.classList.contains('translate-x-full')) {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
        } else {
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('translate-x-0');
        }
    }
}

if (mobileToggle) mobileToggle.addEventListener('click', toggleMenu);
if (closeMobileMenu) closeMobileMenu.addEventListener('click', toggleMenu);

// Mobile Dropdown
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        const content = e.currentTarget.nextElementSibling;
        content.classList.toggle('hidden');
    });
});

// --- DESKTOP DROPDOWN ---
const desktopServicesBtn = document.getElementById('desktop-services-btn');
const desktopServicesMenu = document.getElementById('desktop-services-menu');
const dropdownIcon = document.getElementById('dropdown-icon');

if (desktopServicesBtn && desktopServicesMenu) {
    desktopServicesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        desktopServicesMenu.classList.toggle('hidden');
        if(!desktopServicesMenu.classList.contains('hidden')) {
             if(dropdownIcon) dropdownIcon.style.transform = 'rotate(180deg)';
        } else {
             if(dropdownIcon) dropdownIcon.style.transform = 'rotate(0deg)';
        }
    });

    document.addEventListener('click', (e) => {
        if (!desktopServicesBtn.contains(e.target) && !desktopServicesMenu.contains(e.target)) {
             desktopServicesMenu.classList.add('hidden');
             if(dropdownIcon) dropdownIcon.style.transform = 'rotate(0deg)';
        }
    });
}

// --- CAROUSEL LOGIC ---
window.scrollCarousel = function(carouselId, direction) {
    const track = document.getElementById(carouselId);
    if (track) {
        const scrollAmount = track.offsetWidth; 
        if (direction === 1) {
            track.scrollLeft += scrollAmount;
        } else {
            track.scrollLeft -= scrollAmount;
        }
    }
}

// --- LIGHTBOX ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');

window.openLightbox = function(src) {
    if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightbox.classList.remove('hidden');
        document.body.classList.add('no-scroll');
    }
}

function hideLightbox() {
    if (lightbox) {
        lightbox.classList.add('hidden');
        lightboxImg.src = '';
        document.body.classList.remove('no-scroll');
    }
}

if (closeLightbox) closeLightbox.addEventListener('click', hideLightbox);
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) hideLightbox();
    });
}
