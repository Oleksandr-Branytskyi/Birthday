function initFinalSecretToggle(root = document) {
  const openBtn = root.querySelector('[data-final-open]');
  const secret = root.querySelector('[data-final-secret]');

  // якщо секції/кнопки немає — просто вихід (без помилок)
  if (!openBtn || !secret) return;

  // на випадок повторної ініціалізації — не вішаємо ще раз
  if (openBtn.dataset.bound === 'true') return;
  openBtn.dataset.bound = 'true';

  openBtn.addEventListener('click', () => {
    const isHidden = secret.hasAttribute('hidden');

    if (isHidden) {
      secret.removeAttribute('hidden');
      openBtn.textContent = 'Сховати 💌';
    } else {
      secret.setAttribute('hidden', '');
      openBtn.textContent = 'Натисни 💌';
    }
  });
}

// 1) пробуємо одразу
initFinalSecretToggle();

// 2) надійно після повного парсингу DOM
document.addEventListener('DOMContentLoaded', () => {
  initFinalSecretToggle();
});

// 3) якщо partial-и підставляються асинхронно (load/include), ловимо зміни
const observer = new MutationObserver(() => {
  initFinalSecretToggle();
});
observer.observe(document.documentElement, { childList: true, subtree: true });
