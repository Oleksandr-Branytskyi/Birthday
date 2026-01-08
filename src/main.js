document.addEventListener('click', e => {
  const btn = e.target.closest('[data-final-open]');
  if (!btn) return;

  const secret = document.querySelector('[data-final-secret]');
  if (!secret) return;

  const isHidden = secret.hasAttribute('hidden');

  if (isHidden) {
    secret.removeAttribute('hidden');
    btn.textContent = 'Сховати 💌';
  } else {
    secret.setAttribute('hidden', '');
    btn.textContent = 'Натисни 💌';
  }
});
