
lucide.createIcons();


document.addEventListener('DOMContentLoaded', () => {
    

    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass-nav');
            navbar.classList.replace('py-6', 'py-4');
        } else {
            navbar.classList.remove('glass-nav');
            navbar.classList.replace('py-4', 'py-6');
        }
    });


    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        if (isOpen) {
            mobileMenu.classList.add('hidden');
        } else {
            mobileMenu.classList.remove('hidden');
        }
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });


    gsap.registerPlugin(ScrollTrigger);


    gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
    });


    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });


    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: "#servicios",
            start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)"
    });


    gsap.from(".feature-card", {
        scrollTrigger: {
            trigger: "#por-que-elegirnos",
            start: "top 70%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
    });


    gsap.from(".testimonial-card", {
        scrollTrigger: {
            trigger: "#testimonios",
            start: "top 70%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.5)"
    });


    gsap.from(".location-info > *", {
        scrollTrigger: {
            trigger: "#ubicacion",
            start: "top 70%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
    });
    
    gsap.from(".map-container", {
        scrollTrigger: {
            trigger: "#ubicacion",
            start: "top 70%",
        },
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });


    gsap.from(".cta-content", {
        scrollTrigger: {
            trigger: "#cta",
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});
