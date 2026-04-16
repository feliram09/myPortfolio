import {
  FiGitBranch,
  FiLayers,
  FiTool,
} from 'react-icons/fi';

const groups = [
  {
    icon: <FiLayers />,
    title: 'Lenguajes & Frameworks',
    items: ['JavaScript (ES6+)', 'React.js', 'HTML5', 'CSS3', 'Python'],
  },
  {
    icon: <FiTool />,
    title: 'Herramientas',
    items: ['Git', 'GitHub', 'REST APIs', 'Vercel', 'Cursor'],
  },
  {
    icon: <FiGitBranch />,
    title: 'Industria',
    items: ['Systems Engineering'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__head">
        <span className="section__tag">02 — Skills</span>
        <h2 className="section__title">
          Habilidades <span className="text-accent">técnicas</span>
        </h2>
        <p className="section__sub">
          Lenguajes, frameworks y herramientas que uso para construir productos web.
        </p>
      </div>

      <div className="skills__grid">
        {groups.map((g) => (
          <div key={g.title} className="skill-card">
            <div className="skill-card__icon">{g.icon}</div>
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
