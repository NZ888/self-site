const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const symbols = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = canvas.width / fontSize;


const drops = Array(Math.floor(columns)).fill(0);


function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF00";
    ctx.font = `${fontSize}px Courier`;

    drops.forEach((y, index) => {
        const text = symbols.charAt(Math.floor(Math.random() * symbols.length));
        const x = index * fontSize;

        ctx.fillText(text, x, y * fontSize);


        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        } else {
            drops[index]++;
        }
    });
}


setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const elements = document.querySelectorAll('.fade-in');

function handleScroll() {
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 50) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();

