
// Menu icon functionality
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Toggle menu
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-xmark');
};

// Close menu when clicking a nav link
navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
    };
});

// Scroll sections
window.onscroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`.navbar a[href*=${id}]`);

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
};


// Email functionality
function sendEmail(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto URL with pre-filled information
    const mailtoUrl = `mailto:karthik.p6603@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
    
    // Reset form
    document.getElementById('contactForm').reset();
}

// Handle resume download
document.querySelector('a[download]').addEventListener('click', function(e) {
    e.preventDefault();
    const resumePath = this.getAttribute('href');
    
    // Check if resume file exists
    fetch(resumePath)
        .then(response => {
            if (response.ok) {
                // If file exists, trigger download
                window.open(resumePath, '_blank');
            } else {
                alert('Resume file is not available at the moment. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Unable to download resume. Please try again later.');
        });
});




// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']' ).classList.add('active')
//             })
//         }
//     })
// }
// navLinks.forEach(link => {
//     link.onclick = () => {
//         navbar.classList.remove('active');
//     };
// });
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }