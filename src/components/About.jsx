const stats = [
  { value: '$200', label: 'Premio Avalanche' },
  { value: '2026', label: 'Hackathon (ZEEK Costa Rica)' },
  { value: 'React', label: 'Enfoque principal' },
  { value: 'San José, CR', label: 'Ubicación' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__head">
        <span className="section__tag">01 — Resumen</span>
        <h2 className="section__title">
          Sobre <span className="text-accent">mí</span>
        </h2>
      </div>

      <div className="about__grid">
        <div className="about__text">
          <h3>
            Desarrollador web enfocado en JavaScript y React.
          </h3>
          <p>
            Desarrollador web con experiencia práctica en JavaScript y React, enfocado en construir
            interfaces funcionales y participar en proyectos reales.
          </p>
          <p>
            Ganador del premio Avalanche ($200) en la Hackathon de Crecimiento organizada por la
            comunidad ZEEK en Costa Rica. Actualmente cursando Ingeniería en Sistemas en la U. Fidelitas.
          </p>
          <a href="#contact" className="btn btn--primary">
            Hablemos
          </a>
        </div>

        <div className="about__stats">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-card__value">{s.value}</div>
              <div className="stat-card__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
