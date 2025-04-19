const navLinks = document.querySelectorAll('.sticky-header .nav-links a');
const sections = document.querySelectorAll('main > section');
const belowHeaderButtons = document.querySelector('.below-header-buttons');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('data-section');
        const targetSection = document.getElementById(sectionId);

        if (sectionId === 'home') {
            // Scroll to the top of the page and ensure the demo button div is visible
            window.scrollTo({ top: 0, behavior: 'smooth' });
            belowHeaderButtons.classList.remove('hidden');
        } else if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

function updateCurrentSection() {
    let currentSectionId = 'home';
    let minDistance = Infinity;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionId = section.id;
        } else if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (distance < minDistance) {
                minDistance = distance;
                currentSectionId = section.id;
            }
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSectionId) {
            link.classList.add('active');
        }
    });

    // Hide/Show the buttons and adjust spacing
    if (currentSectionId !== 'home' && belowHeaderButtons && !belowHeaderButtons.classList.contains('hidden')) {
        belowHeaderButtons.classList.add('hidden');
    } else if (currentSectionId === 'home' && belowHeaderButtons && belowHeaderButtons.classList.contains('hidden')) {
        belowHeaderButtons.classList.remove('hidden');
    }
}

window.addEventListener('scroll', updateCurrentSection);
updateCurrentSection(); // Initial

// Modal JS
const modal = document.getElementById('popupModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');

document.getElementById('bookDemoBtn').addEventListener('click', () => {
    modalTitle.innerText = 'Book a Demo';
    modalText.innerText = 'Thank you for your interest! A demo agent will reach out soon.';
    modal.style.display = 'flex';
});

document.getElementById('freeTrialBtn').addEventListener('click', () => {
    modalTitle.innerText = 'Start Your Free Trial';
    modalText.innerText = 'Your 7-day trial has been activated (demo). Explore all features now!';
    modal.style.display = 'flex';
});

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
