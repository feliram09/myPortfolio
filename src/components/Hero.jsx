import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const roles = [
  'Desarrollador Web',
  'JavaScript + React',
  'Interfaces funcionales',
  'Aprendizaje continuo',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 90;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        <div className="hero__text">
          <span className="hero__greeting">
            <span className="hero__wave">👋</span> Hola, soy
          </span>
          <h1 className="hero__name">
            Felipe <span className="hero__name-accent">Ramírez Marín</span>
          </h1>
          <h2 className="hero__role">
            <span className="hero__role-typed">{text}</span>
            <span className="hero__caret" />
          </h2>
          <p className="hero__desc">
            Desarrollador web con experiencia práctica en JavaScript y React, enfocado en construir
            interfaces funcionales y participar en proyectos reales.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              Ver proyectos
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contacto
            </a>
          </div>
          <div className="hero__socials">
            <a href="https://github.com/feliram09" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/felipe-ramirez-marin"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a href="mailto:felipethrm09@email.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero__image">
          <div className="hero__image-ring" />
          <div className="hero__image-ring hero__image-ring--2" />
          <div className="hero__image-wrap">
            <img src="/port-photo.png" alt="Felipe Ramírez Marín" />
          </div>
          <div className="hero__badge hero__badge--1">
            <span>⚛️</span> React
          </div>
          <div className="hero__badge hero__badge--2">
            <span>💻</span> JavaScript
          </div>
          <div className="hero__badge hero__badge--3">
            <span>⛓️</span> Avalanche
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll">
        <span>Ver más</span>
        <FiArrowDown />
      </a>
    </section>
  );
}
