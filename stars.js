const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let stars = [];

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5
  });
}

function drawStars() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'white';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  moveStars();
  requestAnimationFrame(drawStars);
}

function moveStars() {
  stars.forEach(star => {
    star.x += star.vx;
    star.y += star.vy;

    if (star.x < 0 || star.x > width) star.vx = -star.vx;
    if (star.y < 0 || star.y > height) star.vy = -star.vy;
  });
}

window.onresize = function() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

drawStars();
