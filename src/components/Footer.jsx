import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">FR</span>
          <p>Hecho con React.</p>
        </div>
        <div className="footer__socials">
          <a href="https://github.com/feliram09" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href="https://linkedin.com/in/felipe-ramirez-marin" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href="mailto:felipethrm09@email.com" aria-label="Email"><FiMail /></a>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Felipe Ramírez Marín.
        </p>
      </div>
    </footer>
  );
}
