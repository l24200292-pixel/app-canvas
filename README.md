# app-canvas
# 🔵 Interactividad 2D: Light Glass Edition

Proyecto desarrollado para la asignatura de **Graficación**. Esta aplicación web implementa una simulación interactiva de partículas utilizando la API de Canvas de HTML5, diseñada bajo principios de **Glassmorphism claro** y una interfaz moderna y minimalista.

---

## 🚀 Características Principales
* **Diseño Estético:** Interfaz tipo *Light Glassmorphism* con efectos de desenfoque (`backdrop-filter`) y paleta de colores pastel.
* **Motor Interactivo:**
    * **Detección de Colisiones:** Rebote físico contra los bordes del canvas.
    * **Eventos de Mouse:** Cambio de color dinámico (Hover) y eliminación mediante clic.
    * **Sistema de Niveles:** Progresión dinámica cada 10 elementos eliminados con incremento de velocidad.
    * **Feedback Visual:** Notificaciones de "NIVEL" renderizadas directamente sobre el escenario gráfico.
* **Tipografía Moderna:** Uso de *Poppins* para una legibilidad y estética profesional.

---

## 🛠️ Stack Tecnológico
* **Frontend:** HTML5, CSS3 (Bootstrap 5, Flexbox, Variables CSS).
* **Motor Gráfico:** JavaScript ES6+ (Programación Orientada a Objetos, Canvas API).
* **Fuentes:** Google Fonts (Poppins).

---

## 📂 Estructura del Proyecto
```text
/
├── index.html          # Interfaz principal y estructura
├── favicon.png         # Icono personalizado
├── css/
│   └── style.css       # Estilos con efectos de cristal y gradientes
└── js/
    ├── Circle.js       # Clase constructora de partículas
    └── main.js         # Controlador de juego y lógica de niveles
