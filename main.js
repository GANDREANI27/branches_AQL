// ─────────────────────────────────────────────
// RENDER CARDS — links to branche.html?id=xxx
// ─────────────────────────────────────────────
function renderCards() {
  const grid = document.getElementById('branches-grid');
  grid.innerHTML = BRANCHES.map(b => `
    <a class="branch-card" href="branche.html?id=${b.id}" style="--card-color:${b.color}" aria-label="Voir la ${b.name}">
      <div class="card-photo">
        <img src="${b.photo}" alt="${b.name}" style="object-position:${b.photoPos}" loading="lazy">
        <div class="card-photo-overlay"></div>
      </div>
      <div class="card-accent"></div>
      <div class="card-body">
        <div class="card-top">
          <div class="card-icon" style="background:${b.color}18; color:${b.color}">
            ${b.icon}
          </div>
          <div class="card-arrow">
            <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
        </div>
        <div class="branch-name">${b.name}</div>
        <div class="branch-desc">${b.desc}</div>
        ${b.collab ? `
          <div class="branch-collab">
            <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            ${b.collab}
          </div>
        ` : ''}
      </div>
    </a>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderCards);
