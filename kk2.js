let page = 1;
function goTo(n) {
  document.getElementById(`page${page}`).classList.add('hidden');
  page = n;
  document.getElementById(`page${page}`).classList.remove('hidden');
  if (page === 3) loadReasons();
  if (page === 4) startFalling();
}

function loadReasons() {
  const container = document.getElementById('reasons');
  for (let i = 1; i <= 100; i++) {
    const p = document.createElement('p');
    p.textContent = `${i}. Because your heart is pure and beautiful.`;
    container.appendChild(p);
  }
}

function startFalling() {
  const container = document.querySelector('.falling-hearts');
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '-10%';
    heart.style.opacity = Math.random();
    container.appendChild(heart);
    fall(heart);
  }
}

function fall(h) {
  let top = -10;
  const speed = Math.random() * 2 + 1;
  function frame() {
    top += speed;
    h.style.top = top + '%';
    if (top < 110) requestAnimationFrame(frame);
    else h.remove();
  }
  frame();
}

