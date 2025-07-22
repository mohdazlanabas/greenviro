const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Form submitted (placeholder)! Thank you for contacting Greenviro.');
  });
}
