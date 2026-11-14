// Renders the app cards from apps.json. To add an app, edit apps.json only.
const grid = document.getElementById('app-grid');
const labels = { live: 'Live', beta: 'Beta', soon: 'Coming soon' };
let apps = [];

function el(tag, attrs = {}, text) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  if (text !== undefined) node.textContent = text;
  return node;
}

function card(app) {
  const c = el('article', { class: 'card' });
  const top = el('div', { class: 'card-top' });
  top.append(el('div', { class: 'icon', 'aria-hidden': 'true' }, app.icon || '◆'));
  const head = el('div');
  head.append(el('h3', {}, app.name), el('span', { class: `badge ${app.status}` }, labels[app.status] || app.status));
  top.append(head);
  c.append(top, el('p', {}, app.description));

  if (app.tags?.length) {
    const tags = el('div', { class: 'tags' });
    app.tags.forEach(t => tags.append(el('span', {}, t)));
    c.append(tags);
  }
  if (app.links?.length) {
    const links = el('div', { class: 'links' });
    app.links.forEach(l => links.append(el('a', { href: l.url, target: '_blank', rel: 'noopener' }, `${l.label} →`)));
    c.append(links);
  }
  return c;
}

function render(filter = 'all') {
  grid.replaceChildren(...apps.filter(a => filter === 'all' || a.status === filter).map(card));
  if (!grid.children.length) grid.append(el('p', { class: 'lede' }, 'Nothing here yet.'));
}

document.querySelectorAll('.chip').forEach(chip => chip.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === chip));
  render(chip.dataset.filter);
}));

document.getElementById('year').textContent = new Date().getFullYear();

fetch('apps.json')
  .then(r => r.json())
  .then(data => { apps = data; render(); })
  .catch(() => grid.append(el('p', { class: 'lede' }, 'Could not load the app list.')));
