const openBtn = document.getElementById('openLetterBtn');
const modal = document.getElementById('letterModal');
const seal = document.getElementById('seal');
const envelope = document.querySelector('.envelope');
const closeBtn = document.getElementById('closeLetterBtn');
const playMusicBtn = document.getElementById('playMusicBtn');
const loveSong = document.getElementById('loveSong');

// abrir modal
openBtn.addEventListener('click', () => {
  modal.classList.add('open');
});

// abrir carta con corazones volando
seal.addEventListener('click', () => {
  envelope.classList.add('open');
  releaseHearts();
});

// cerrar carta
closeBtn.addEventListener('click', () => {
  envelope.classList.remove('open');
  modal.classList.remove('open');
  loveSong.pause();
  loveSong.currentTime = 0;
});

// ===== Nuevo modal de video =====
const videoModal = document.getElementById('videoModal');
const closeVideoBtn = document.getElementById('closeVideoBtn');
const loveVideo = document.getElementById('loveVideo');

// abrir modal de video
playMusicBtn.addEventListener('click', () => {
  videoModal.classList.add('open');
  loveVideo.currentTime = 0;
  loveVideo.play();
});

// cerrar modal de video
closeVideoBtn.addEventListener('click', () => {
  videoModal.classList.remove('open');
  loveVideo.pause();
});

// ===== Lluvia de corazones inicial =====
const heartsContainer = document.querySelector('.hearts-container');
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 20 + 'px';
  heart.style.animationDuration = Math.random() * 3 + 4 + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}
setInterval(createHeart, 500);

// ===== Corazones que salen del sobre =====
function releaseHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '💖';
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.animationDuration = Math.random() * 2 + 2 + 's';
    heartsContainer.appendChild(heart);

    // animación con trayectoria
    heart.animate(
      [
        { transform: `translate(-50%, -50%) scale(1)`, opacity: 1 },
        { transform: `translate(${Math.random()*200-100}px, -${Math.random()*200+100}px) scale(0.5)`, opacity: 0 }
      ],
      { duration: 2000 + Math.random()*1000, easing: "ease-out", fill: "forwards" }
    );

    setTimeout(() => heart.remove(), 3000);
  }
}
