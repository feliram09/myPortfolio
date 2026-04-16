import { useState } from 'react';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="section__head">
        <span className="section__tag">04 — Contacto</span>
        <h2 className="section__title">
          Construyamos <span className="text-accent">juntos</span>
        </h2>
        <p className="section__sub">
          ¿Tienes una idea o proyecto? Escríbeme y coordinamos.
        </p>
      </div>

      <div className="contact__grid">
        <div className="contact__info">
          <div className="contact-item">
            <div className="contact-item__icon"><FiMail /></div>
            <div>
              <h4>Email</h4>
              <p>
                <a href="mailto:felipethrm09@email.com">felipethrm09@email.com</a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item__icon"><FiMapPin /></div>
            <div>
              <h4>Ubicación</h4>
              <p>San José, CR</p>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={submit}>
          <div className="field">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handle}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handle}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handle}
              required
            />
          </div>
          <button type="submit" className="btn btn--primary">
            {sent ? 'Enviado ✓' : (<>Enviar <FiSend /></>)}
          </button>
        </form>
      </div>
    </section>
  );
}
