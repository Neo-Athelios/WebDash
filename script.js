// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        // Update active nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
  // Toggle visibility of below-header-buttons
  const belowHeaderButtons = document.querySelector('.below-header-buttons');
  const header = document.querySelector('header');
  header.addEventListener('click', () => {
    belowHeaderButtons.classList.toggle('hidden');
  });
  // Modal functionality
  const modal = document.getElementById('popupModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalText');
  document.getElementById('bookDemoBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'https://neo-athelios.github.io/WebDash-book-a-demo/'; // Replace with your desired link
});
document.getElementById('freeTrialBtn').addEventListener('click', (e) => {
e.preventDefault();
modalTitle.textContent = 'Start Your Free Trial';
modalText.textContent = 'Your 14-day free trial is now active. You are prompted to sign up with us to continue exploring all features. Click the "Close" button to proceed.';
modal.classList.add('show');
// Redirect to a link on clicking close
const closeButton = document.querySelector('.close-btn');
closeButton.addEventListener('click', () => {
window.location.href = 'http://app.technixcrm.com/signup'; // Replace with your desired link
});
});
function closeModal() {
modal.classList.remove('show');
}
// Close modal when clicking outside
window.addEventListener('click', (e) => {
if (e.target === modal) {
closeModal();
}
});
// Sticky header shadow on scroll
window.addEventListener('scroll', () => {
const header = document.querySelector('header');
if (window.scrollY > 10) {
header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
} else {
header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
}
});
// Auto-sliding carousel
let currentSlide = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
function nextSlide() {
currentSlide = (currentSlide + 1) % totalSlides;
updateSlider();
}
function updateSlider() {
slider.style.transform = `translateX(-${currentSlide * 33.333}%)`;
}
// Auto-rotate every 5 seconds
setInterval(nextSlide, 5000);
// Vertical menu interactivity
const menuItems = document.querySelectorAll('.menu-item');
const contentText = document.querySelector('.content-text');
const contentImage = document.querySelector('.content-image img');

const contentData = [
{
text: 'Lead Management',
description: 'Capture, gather and organize leads from multiple sources to enhance lead conversion. Identify and follow-up on Cross-Selling and Upselling opportunities for better customer success strategies.',
img: 'https://technixcrm.com/assets/images/lead-mangement.png',
},
{
text: 'Contact Management',
description: 'Contact management is an essential feature of the CRM. With all contacts details stored securely on T-CRM cloud, everyone with access has a real-time view of new and updated contacts. Contact management lets you define user access to contacts, personalize interaction, merge duplicate contacts, and import contacts/leads using CSV files or third-party APIs like Google Maps API.',
img: 'https://technixcrm.com/assets/images/contanct-management.png',
},
{
text: 'Sales Automation',
description: 'T-CRM automation streamlines sales and services, making them more efficient and helping you sell more quickly. It alleviates the burden on Sales, Marketing, and Customer Service teams by enabling them to focus on what they do best.',
img: 'https://technixcrm.com/assets/images/sale-automation.png',
},
{
text: 'Document Management',
description: 'T-CRM’s document management boosts productivity with a central repository of digital documents like contracts, licenses, spreadsheets, and statements in CRM’s Client tab.',
img: 'https://technixcrm.com/assets/images/document-management.png',
},
{
text: 'Campaign Management',
description: 'Integrating CRM with SMS and Email takes customer relationship management to the next level. By combining these channels, businesses can create a seamless and personalized experience for their customers.',
img: 'https://technixcrm.com/assets/images/campaigns-mangement.png',
},
{
text: 'Task Management',
description: 'Team members can simultaneously view and edit tasks for sales, marketing, customer communication, projects, and more in CRM, and have a clear overview of all activities.',
img: 'https://technixcrm.com/assets/images/task-mangement.png',
},
{
text: 'Reporting',
description: 'T-CRM gives you a more comprehensive picture with Daily, Weekly, Monthly, and YTD (Year to Date) reports, covering various metrics like Leads, MIS, Follow-ups, Tasks, and Payments.',
img: 'https://technixcrm.com/assets/images/reporting.png',
},
{
text: 'Activity Management',
description: 'Customer relationship management activities are a collection of the actions and role responsibilities in CRM regarding customer interactions. T-CRM activities include reporting, task management, follow-ups, and more.',
img: 'https://technixcrm.com/assets/images/activity-mangement.png',
},
];

let currentIndex = 0;

function updateContent(index) {
// Remove active class from all
menuItems.forEach((i) => {
i.classList.remove('active');
});
// Add active class to the current item
menuItems[index].classList.add('active');

// Update content
contentText.innerHTML = `<h3>${contentData[index].text}</h3><p>${contentData[index].description}</p>`;
contentImage.src = contentData[index].img;
contentImage.alt = contentData[index].text;
}

function autoScroll() {
updateContent(currentIndex);
currentIndex = (currentIndex + 1) % menuItems.length;
}

// Set the interval for auto-scrolling (4000 milliseconds = 4 seconds)
const scrollInterval = setInterval(autoScroll, 4000);

// Optional: Pause auto-scrolling when a menu item is clicked
menuItems.forEach((item, index) => {
item.addEventListener('click', () => {
clearInterval(scrollInterval);
updateContent(index);
// Optionally, you can restart the auto-scroll after a delay if needed
// setTimeout(() => {
//   scrollInterval = setInterval(autoScroll, 4000);
// }, 5000);
});
});

// Initialize the display with the first item
updateContent(currentIndex);