document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('[data-final-open]');
  const secret = document.querySelector('[data-final-secret]');

  if (!openBtn || !secret) return;

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
});
