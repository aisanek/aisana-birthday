const sparkleLayer = document.querySelector('.sparkle-layer');
const confettiBtn = document.getElementById('confettiBtn');
const sparkleBtn = document.getElementById('sparkleBtn');

function celebrate(amount = 36) {
  const symbols = ['💗', '✨', '🎀', '🌸', '💖', '⭐', '🦋'];
  for (let i = 0; i < amount; i++) {
    const el = document.createElement('span');
    el.className = 'spark';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = `${Math.random() * 100}%`;
    el.style.top = `${-10 - Math.random() * 12}%`;
    el.style.fontSize = `${12 + Math.random() * 20}px`;
    el.style.animationDuration = `${3.5 + Math.random() * 3.5}s`;
    el.style.animationDelay = `${Math.random() * .7}s`;
    sparkleLayer.appendChild(el);
    setTimeout(() => el.remove(), 8000);
  }
}

confettiBtn?.addEventListener('click', () => celebrate(70));
sparkleBtn?.addEventListener('click', () => celebrate(45));

function getNextBirthday() {
  const now = new Date();
  let birthday = new Date(now.getFullYear(), 7, 27, 0, 0, 0);
  if (now >= birthday) birthday = new Date(now.getFullYear() + 1, 7, 27, 0, 0, 0);
  return birthday;
}

function updateCountdown() {
  const now = new Date();
  const thisYearBirthday = new Date(now.getFullYear(), 7, 27, 0, 0, 0);
  const sameDay = now.getFullYear() === thisYearBirthday.getFullYear() && now.getMonth() === 7 && now.getDate() === 27;
  const label = document.getElementById('countdownLabel');

  if (sameDay) {
    label.textContent = 'Бүгін — Айсанектің туған күні! 🎂💗';
  } else {
    label.textContent = 'Келесі 27 тамызға дейінгі кішкентай countdown ✨';
  }

  const target = getNextBirthday();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff / 3600000) % 24;
  const minutes = Math.floor(diff / 60000) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Page ашылғанда кішкентай sparkle
window.addEventListener('load', () => setTimeout(() => celebrate(25), 500));
