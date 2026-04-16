import { useEffect, useState } from 'react';

const links = [
  { href: '#home', label: 'Inicio' },
  { href: '#about', label: 'Resumen' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#home" className="navbar__logo">
        <span className="navbar__logo-mark">FR</span>
        <span className="navbar__logo-dot" />
      </a>
      <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="navbar__cta" onClick={() => setOpen(false)}>
          Hablemos
        </a>
      </nav>
      <button
        className="navbar__burger"
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
