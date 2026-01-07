/* ---------- SERVICES ---------- */
function openService(type) {
    const section = document.getElementById("service-details");
    const title = document.getElementById("service-title");
    const desc = document.getElementById("service-description");
    const points = document.getElementById("service-points");

    section.style.display = "block";
    points.innerHTML = "";

    if (type === "java") {
        title.innerText = "Java Backend Development";
        desc.innerText =
            "I design and build scalable, secure backend systems using Java and modern backend technologies.";

        [
            "Strong DSA & problem solving",
            "Spring Boot & REST APIs",
            "PostgreSQL / MySQL",
            "Authentication & Authorization",
            "Basic system design"
        ].forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            points.appendChild(li);
        });

    } else if (type === "fullstack") {
        title.innerText = "Full Stack Development";
        desc.innerText =
            "I develop complete end-to-end web applications with clean UI and robust backend logic.";

        [
            "HTML, CSS, JavaScript",
            "React.js frontend",
            "Java backend APIs",
            "PostgreSQL / SQL",
            "Git & GitHub"
        ].forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            points.appendChild(li);
        });
    }

    section.scrollIntoView({ behavior: "smooth" });
}

function closeService() {
    document.getElementById("service-details").style.display = "none";
}

/* ---------- MENU ---------- */
function openmenu() {
    document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px";
}

/* ---------- PORTFOLIO SLIDER ---------- */
function scrollPortfolio(direction) {
    const track = document.getElementById("portfolio-track");
    const scrollAmount = track.offsetWidth / 1.2;

    track.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}
/* ---------- PORTFOLIO AUTO HIDE SLIDER ---------- */
document.addEventListener("DOMContentLoaded", () => {
    const works = document.querySelectorAll("#portfolio .work");
    const track = document.getElementById("portfolio-track");
    const leftBtn = document.querySelector(".slider-btn.left");
    const rightBtn = document.querySelector(".slider-btn.right");

    // If 3 or fewer projects → no slider, no buttons
    if (works.length <= 3) {
        if (leftBtn) leftBtn.style.display = "none";
        if (rightBtn) rightBtn.style.display = "none";

        // Disable horizontal scrolling
        if (track) {
            track.style.overflowX = "hidden";
        }
    }
}); 
