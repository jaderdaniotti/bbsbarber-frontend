

particlesJS("particles-js", {
    particles: {
        number: { value: 468, density: { enable: true, value_area: 800 } },
        color: { value: "#393E46" },
        shape: {
            type: "polygon",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: false,
                speed: 63.17682220584306,
                size_min: 4.85975555429562,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 600 },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: false, mode: "bubble" },
            resize: true,
        },
        modes: {
            grab: { distance: 242.987777714781, line_linked: { opacity: 1 } },
            bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
            },
            repulse: { distance: 400, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
    retina_detect: false,
});

document.addEventListener("DOMContentLoaded", () => {
    const LOGONAVBAR = document.getElementById("logoNavbar");
    const NAVBAR = document.getElementById("navbar");
    const altezzaMassima = 150;
    const altezzaMinima = 70;
    const scrollMax = 200;

    window.addEventListener("scroll", () => {
        const scrollY = Math.min(window.scrollY, scrollMax);
        const nuovaAltezza =
            altezzaMassima -
            (altezzaMassima - altezzaMinima) * (scrollY / scrollMax);

        LOGONAVBAR.style.height = `${nuovaAltezza}px`;

        setTimeout(() => {
            NAVBAR.style.height = `${nuovaAltezza + 10}px`;
        }, 0);
    });
});

