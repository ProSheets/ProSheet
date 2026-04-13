/* ── THEME TOGGLE ── */
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('prosheet-theme');
if (savedTheme === 'light') document.body.classList.add('light');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('prosheet-theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

/* ── FAQ ── */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ── WHATSAPP FORM ── */
function sendWhatsApp() {
  const name = document.getElementById('f-name').value.trim();
  const type = document.getElementById('f-type').value;
  const msg  = document.getElementById('f-msg').value.trim();
  if (!name || !msg) { alert('Por favor, completa tu nombre y describe tu proyecto.'); return; }
  const text = `Hola Álvaro! Soy ${name}${type ? `, ${type}` : ''}.%0A%0AMe interesa crear una herramienta de Google Sheets. Te cuento:%0A${encodeURIComponent(msg)}`;
  window.open(`https://wa.me/34651381966?text=${text}`, '_blank');
}

/* ── SCROLL REVEAL ── */
const obs = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
