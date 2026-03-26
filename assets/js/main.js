const canvas = document.getElementById("canvasInteraction");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const percentEl = document.getElementById("percent");
const levelEl = document.getElementById("level");

canvas.width = 750;
canvas.height = 450;

let circles = [];
let eliminated = 0;
let level = 1;
let speedFactor = 1.2;

// Variables para el mensaje de nivel
let levelAlpha = 0;
let showLevelText = false;

function spawnBatch() {
    circles = []; 
    for (let i = 0; i < 10; i++) {
        let r = 22;
        let x = Math.random() * (canvas.width - r * 2) + r;
        let y = Math.random() * (canvas.height - r * 2) + r;
        circles.push(new Circle(eliminated + i + 1, x, y, r, speedFactor));
    }
    showLevelText = true;
    levelAlpha = 1.0; 
}

// NUEVO: Lógica de cambio de color al pasar el mouse
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    circles.forEach(c => {
        let d = Math.sqrt((mx - c.x)**2 + (my - c.y)**2);
        // Cambia a rosa intenso si el mouse está encima
        c.color = (d < c.radius) ? "#ff0077" : "#00d2ff"; 
    });
});

canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    for (let i = circles.length - 1; i >= 0; i--) {
        let c = circles[i];
        let d = Math.sqrt((mx - c.x)**2 + (my - c.y)**2);
        
        if (d < c.radius && !c.isDying) {
            c.isDying = true;
            eliminated++;
            updateUI();
            
            if (eliminated % 10 === 0) {
                level++;
                speedFactor += 0.5;
                spawnBatch();
            }
            break;
        }
    }
});

function drawLevelOverlay() {
    if (showLevelText) {
        ctx.save();
        ctx.globalAlpha = levelAlpha;
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 60px Arial";
        ctx.textAlign = "center";
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#00d2ff";
        ctx.fillText("NIVEL " + level, canvas.width / 2, canvas.height / 2);
        ctx.restore();
        levelAlpha -= 0.015;
        if (levelAlpha <= 0) showLevelText = false;
    }
}

function updateUI() {
    scoreEl.innerText = eliminated;
    levelEl.innerText = level;
    let p = (eliminated % 10) * 10;
    if (eliminated > 0 && eliminated % 10 === 0) p = 100;
    percentEl.innerText = p + "%";
}

function animate() {
    ctx.fillStyle = "rgba(116, 204, 244, 0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    circles = circles.filter(c => c.opacity > 0);
    circles.forEach(c => c.update(ctx, canvas.width, canvas.height));

    drawLevelOverlay();
    requestAnimationFrame(animate);
}

spawnBatch();
animate();