// Function for cycling domains
const domains = ["Business Analyst", "Data Analyst", "Data Scientist", "ML Engineer"];
let currentIndex = 0;

function cycleDomains() {
    const domainElement = document.getElementById("domain");

    domainElement.classList.add("fade-out");

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % domains.length;
        domainElement.textContent = domains[currentIndex];
        domainElement.classList.remove("fade-out");
    }, 500);
}

setInterval(cycleDomains, 3000);

// Function for resume download
document.getElementById('downloadResume').addEventListener('click', function () {
    const resumeLink = 'Parth_Save_AIML_Resume'; // Replace with the actual path to your resume file
    const link = document.createElement('a');
    link.href = resumeLink;
    link.download = 'Parth Save.pdf'; // Replace with your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('[data-section]');

//     sections.forEach(section => {
//         Array.from(section.children).forEach(child => {
//             child.classList.add('hidden', 'reveal');
//         });
//     });

//     const revealOnScroll = () => {
//         sections.forEach(section => {
//             const sectionTop = section.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;

//             if (sectionTop < windowHeight - 100) {
//                 Array.from(section.children).forEach(child => {
//                     child.classList.remove('hidden');
//                 });
//             }
//         });
//     };

//     window.addEventListener('scroll', revealOnScroll);

//     revealOnScroll();
// });
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('[data-section]');
    
    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 100% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                Array.from(section.children).forEach(child => {
                    child.classList.add('reveal');
                });
                observer.unobserve(section); // Stop observing once animation is triggered
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        Array.from(section.children).forEach(child => {
            child.classList.add('hidden'); // Start with hidden state
        });
        sectionObserver.observe(section);
    });
});
