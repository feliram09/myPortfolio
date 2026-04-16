import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Green Ledger',
    subtitle: 'Hackathon Crecimiento (ZEEK Costa Rica) · Abr 2026',
    stack: ['JavaScript', 'React', 'Avalanche'],
    bullets: [
      'Desarrollamos una aplicación web durante la hackathon de Crecimiento organizada por la comunidad ZEEK en Costa Rica.',
      'Ganamos un premio de $200 del prize pool de Avalanche compitiendo en un entorno de alta presión.',
      'Primer hackathon como desarrollador: construí y presenté un proyecto funcional en cuestión de horas.',
    ],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    live: '',
    repo: '',
  },
  {
    title: 'Sistema de Gestión para Barbería',
    subtitle: 'Nov 2025 – Dic 2025',
    stack: ['JavaScript', 'React'],
    bullets: [
      'Desarrollé una aplicación web para agendar citas y administrar clientes, priorizando una interfaz simple y usabilidad.',
    ],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    live: '',
    repo: '',
  },
  {
    title: 'Integración Blockchain',
    subtitle: 'Blockchain Jungle Hackathon · Nov 2025',
    stack: ['JavaScript', 'React', 'Avalanche'],
    bullets: [
      'Implementé la integración de la blockchain de Avalanche a un proyecto en un entorno de hackathon competitivo.',
    ],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    live: '',
    repo: '',
  },
  {
    title: 'Ejercicios Frontend',
    subtitle: 'Frontend Masters · Nov 2025 – Ene 2026',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    bullets: [
      'Construí una serie de ejercicios prácticos de HTML, CSS y JS reforzando fundamentos de desarrollo frontend.',
    ],
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    live: '',
    repo: '',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section__head">
        <span className="section__tag">03 — Projects</span>
        <h2 className="section__title">
          Proyectos <span className="text-accent">destacados</span>
        </h2>
        <p className="section__sub">
          Selección de proyectos y experiencias recientes.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
            <div className="project-card__cover" style={{ background: p.gradient }}>
              <span className="project-card__title-cover">{p.title}</span>
              <div className="project-card__actions">
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                    <FiExternalLink />
                  </a>
                ) : null}
                {p.repo ? (
                  <a href={p.repo} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FiGithub />
                  </a>
                ) : null}
              </div>
            </div>
            <div className="project-card__body">
              <h3>{p.title}</h3>
              <p>{p.subtitle}</p>
              <ul>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <ul className="project-card__tags">
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
