// Edit this list to add projects. Add a GitHub link once a project is uploaded.
const projects = [
  { title: "Web-Based Classroom Monitoring System", description: "Designed the UI/UX and contributed to the code for a system that detects classroom occupancy through motion detection.", tags: ["UI/UX","Web development"], link: "" },
  { title: "Web-Based Online Binondo Queue System", description: "A system that lets customers join and monitor restaurant queues online. I worked on the UI/UX, coding and overall development.", tags: ["UI/UX","Web development"], link: "" }
  // link example: "https://github.com/ikanne/repo-name"
];
document.getElementById('grid').innerHTML = projects.map(p => {
  const open = p.link ? `<a class="project" href="${p.link}" target="_blank" rel="noopener">` : `<div class="project">`;
  const close = p.link ? '</a>' : '</div>';
  return `${open}<h3>${p.title}</h3><p>${p.description}</p><div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>${close}`;
}).join('');

const root = document.documentElement;
try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
document.getElementById('theme').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

const links = [...document.querySelectorAll('.links a')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.hash === '#' + e.target.id));
}), { rootMargin: '-40% 0px -55% 0px' });
['home','about','skills','projects','contact'].forEach(id => io.observe(document.getElementById(id)));
document.getElementById('yr').textContent = new Date().getFullYear();
