// ─────────────────────────────────────────────
// BRANCH PAGE — Load content from URL param
// ─────────────────────────────────────────────

const params = new URLSearchParams(window.location.search);
const brancheId = params.get('id');
const branch = BRANCHES.find(b => b.id === brancheId);

if (!branch) {
  window.location.href = 'index.html';
}

// ─── POPULATE PAGE ───
function populatePage() {
  document.title = `BDA IESEG — ${branch.name}`;

  // Hero
  const heroImg = document.getElementById('hero-img');
  heroImg.src = branch.photo;
  heroImg.alt = branch.name;
  heroImg.style.objectPosition = branch.photoPos;

  document.getElementById('branch-hero').style.setProperty('--branch-color', branch.color);

  const tag = document.getElementById('branch-tag');
  tag.innerHTML = branch.tagIcon + ' ' + branch.name;
  tag.style.background = branch.color + '22';
  tag.style.color = branch.color;
  tag.querySelector('svg').style.stroke = branch.color;

  document.getElementById('branch-title').textContent = branch.tagline;
  document.getElementById('branch-tagline').textContent = branch.desc;

  const collabEl = document.getElementById('branch-collab-hero');
  if (branch.collab) {
    collabEl.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> ${branch.collab}`;
    collabEl.style.display = 'inline-flex';
  }

  // Description (support \n paragraph breaks)
  const descEl = document.getElementById('branch-description');
  descEl.innerHTML = branch.description
    .split('\n\n')
    .map(p => `<p>${p}</p>`)
    .join('');

  // Activities
  const actEl = document.getElementById('branch-activities');
  actEl.innerHTML = branch.activities.map(a => `
    <div class="activity-item">
      <div class="activity-icon" style="background:${branch.color}14; color:${branch.color}">
        ${a.icon}
      </div>
      <span>${a.label}</span>
    </div>
  `).join('');

  // Form
  document.getElementById('form-branch-name').textContent = branch.name;
  document.getElementById('btn-submit').style.background = branch.color;
  document.getElementById('modal').style.setProperty('--focus-color', branch.color);

  // Accent color for form focus
  document.documentElement.style.setProperty('--focus-color', branch.color);
  document.documentElement.style.setProperty('--branch-accent', branch.color);
}

// ─── FORM LOGIC ───
function setLoading(on) {
  const btn     = document.getElementById('btn-submit');
  const txt     = document.getElementById('btn-text');
  const spinner = document.getElementById('spinner');
  const icon    = document.getElementById('btn-icon');

  btn.disabled          = on;
  txt.textContent       = on ? 'Envoi...' : "S'inscrire à la branche";
  spinner.style.display = on ? 'block' : 'none';
  icon.style.display    = on ? 'none'  : 'block';
}

function validate() {
  let ok = true;
  ['f-prenom', 'f-nom', 'f-messenger'].forEach(fid => {
    const el = document.getElementById(fid);
    if (!el.value.trim()) { el.classList.add('error'); ok = false; }
    else el.classList.remove('error');
  });

  const emailEl = document.getElementById('f-email');
  if (!/^[^\s@]+@ieseg\.fr$/i.test(emailEl.value.trim())) {
    emailEl.classList.add('error');
    ok = false;
  } else {
    emailEl.classList.remove('error');
  }
  return ok;
}

async function submitForm() {
  if (!validate()) return;

  document.getElementById('error-banner').classList.remove('active');
  setLoading(true);

  const payload = {
    branche:   branch.name,
    prenom:    document.getElementById('f-prenom').value.trim(),
    nom:       document.getElementById('f-nom').value.trim(),
    messenger: document.getElementById('f-messenger').value.trim(),
    email:     document.getElementById('f-email').value.trim(),
    date:      new Date().toLocaleDateString('fr-FR'),
    heure:     new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
  };

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    setLoading(false);
    document.getElementById('success-branch').textContent = branch.name;
    document.getElementById('form-screen').style.display = 'none';
    document.getElementById('success-screen').classList.add('active');

  } catch (err) {
    setLoading(false);
    document.getElementById('error-banner-text').textContent =
      "Impossible d'envoyer l'inscription. Vérifie ta connexion et réessaie.";
    document.getElementById('error-banner').classList.add('active');
  }
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  populatePage();
  document.getElementById('btn-submit').addEventListener('click', submitForm);
});
