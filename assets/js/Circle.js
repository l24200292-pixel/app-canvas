class Circle {
    constructor(id, x, y, radius, speed) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.radius = radius;
        
        // Movimiento aleatorio
        this.dx = (Math.random() - 0.5) * speed * 4;
        this.dy = (Math.random() - 0.5) * speed * 4;
        
        this.baseColor = "#00d2ff"; 
        this.color = this.baseColor;
        this.opacity = 1;
        this.isDying = false;
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Efecto Espejo/Esfera
        let grad = ctx.createRadialGradient(this.x-5, this.y-5, 2, this.x, this.y, this.radius);
        grad.addColorStop(0, "rgba(255, 255, 255, 0.9)");
        grad.addColorStop(1, this.color);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        
        // Número ID
        ctx.fillStyle = "white";
        ctx.font = "bold 11px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.id, this.x, this.y);
        ctx.restore();
    }

    update(ctx, w, h) {
        if (this.isDying) {
            this.opacity -= 0.1; // Desvanecimiento rápido
        } else {
            // Solo rebote en paredes
            if (this.x + this.radius > w || this.x - this.radius < 0) this.dx *= -1;
            if (this.y + this.radius > h || this.y - this.radius < 0) this.dy *= -1;

            this.x += this.dx;
            this.y += this.dy;
        }
        this.draw(ctx);
    }
}