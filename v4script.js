// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
});

// Video Unmute on User Interaction
const video = document.getElementById("banner-video");
const banner = document.querySelector('.banner');

function unmuteVideo() {
    if (video && video.muted) {
        video.muted = false;
        video.play().catch(error => {
            console.error("Autoplay was prevented:", error);
        });
    }
    banner.removeEventListener('click', unmuteVideo);
    video.removeEventListener('click', unmuteVideo);
    document.removeEventListener('click', unmuteVideo); //add this line
}

banner.addEventListener('click', unmuteVideo);
video.addEventListener('click', unmuteVideo);
document.addEventListener('click', unmuteVideo); //add this line.

// Check if video is playing, if not play it.
video.addEventListener('loadeddata', () => {
    if(video.paused){
        video.play().catch(error=>{
            console.error("Autoplay was prevented:", error);
        });
    }
    setTimeout(unmuteVideo, 100); //add this line
