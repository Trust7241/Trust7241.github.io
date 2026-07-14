/* ===========================================
   MOBILE NAVIGATION
=========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* ===========================================
   BACK TO TOP BUTTON
=========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================================
   ACTIVE NAVIGATION LINK
=========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================================
   SCROLL REVEAL ANIMATION
=========================================== */

const revealElements = document.querySelectorAll(
".project-card, .education-card, .contact-card, .stat-card, .gallery-item, .skill-card"
);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .7s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ===========================================
   SMOOTH SCROLL FOR NAVIGATION
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ===========================================
   FOOTER YEAR
=========================================== */

const footerParagraphs = document.querySelectorAll("footer p");

if (footerParagraphs.length > 2) {

    footerParagraphs[2].innerHTML =
        "© " + new Date().getFullYear() + " Trust Edudje. All Rights Reserved.";

}
// ===========================
// Animated Achievement Counters
// ===========================

const counters = document.querySelectorAll(".counter");

const animateCounters = () => {
    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const increment = target / 80;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });
};

window.addEventListener("load", animateCounters);
