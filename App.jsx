
import React, { useEffect, useState } from 'react';

const skills = [
  { icon: '🌐', name: 'HTML5' },
  { icon: '🎨', name: 'CSS3' },
  { icon: '⚡', name: 'JavaScript' },
  { icon: '⚛️', name: 'React.js' },
  { icon: '📱', name: 'Responsive Design' },
  { icon: '📐', name: 'Flexbox & Grid' },
  { icon: '🧭', name: 'React Router' },
  { icon: '🔗', name: 'REST API' },
  { icon: '🐙', name: 'Git & GitHub' },
  { icon: '📦', name: 'NPM' },
  { icon: '🖌️', name: 'Figma' },
  { icon: '🚀', name: 'Vite' },
];

const projects = [
  {
    number: '01',
    icon: '🛍️',
    category: 'E-commerce',
    title: "Internet do'kon",
    description:
      'Mahsulotlar, narxlar va zamonaviy kartalarga ega internet do‘kon.',
    tech: ['React', 'CSS', 'JavaScript'],
  },
  {
    number: '02',
    icon: '🌤️',
    category: 'API Application',
    title: 'Ob-havo ilovasi',
    description:
      'API yordamida ob-havo ma’lumotlarini ko‘rsatuvchi veb-ilova.',
    tech: ['React', 'REST API', 'CSS'],
  },
  {
    number: '03',
    icon: '✍️',
    category: 'Web Application',
    title: 'Shaxsiy blog',
    description:
      'Maqolalar va sahifalar orasida qulay navigatsiyaga ega blog.',
    tech: ['React', 'Router', 'CSS'],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('show'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio orqali xabar: ${formData.name}`
    );

    const body = encodeURIComponent(
      `Ism: ${formData.name}\nEmail: ${formData.email}\n\nXabar:\n${formData.message}`
    );

    window.location.href =
      `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="portfolio">
      <div className="top-progress"></div>

      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-icon">I</span>
          <span>
            Ikrom<span className="logo-dot">.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menyuni ochish"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Bosh sahifa</a></li>
          <li><a href="#about" onClick={closeMenu}>Men haqimda</a></li>
          <li><a href="#skills" onClick={closeMenu}>Ko‘nikmalar</a></li>
          <li><a href="#projects" onClick={closeMenu}>Loyihalar</a></li>
          <li><a href="#certificate" onClick={closeMenu}>Sertifikat</a></li>
          <li>
            <a href="#contact" className="nav-contact" onClick={closeMenu}>
              Bog‘lanish ↗
            </a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content reveal">
            <div className="availability">
              <span className="status-dot"></span>
              Frontend dasturchi
            </div>

            <p className="eyebrow">SALOM, MEN</p>

            <h1>
              Bozorov <span className="gradient-text">Ikrom</span>
            </h1>

            <h2>
              Men <span className="typing-text">Frontend Developer</span>
            </h2>

            <p className="hero-description">
              Zamonaviy va interaktiv veb-saytlar yarataman.
              Har bir loyihada yangi bilimlarni o‘rganib,
              o‘z mahoratimni rivojlantirib boraman.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Loyihalarim ↗
              </a>
              <a href="#contact" className="btn btn-outline">
                Men bilan bog‘laning
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://t.me/Ikromjon_B1"
                target="_blank"
                rel="noreferrer"
              >
                ✈ Telegram ↗
              </a>
              <span></span>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="floating-tag tag-html">HTML5</div>
            <div className="floating-tag tag-css">CSS3</div>
            <div className="floating-tag tag-react">⚛ React</div>
            <div className="floating-tag tag-js">JS</div>

            <div className="profile-frame">
              <img
                src="/b.jpg"
                alt="Bozorov Ikrom"
                className="profile-img"
              />
            </div>

            <div className="profile-caption">
              <span className="caption-icon">&lt;/&gt;</span>
              <div>
                <strong>Bozorov Ikrom</strong>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>

          <a href="#about" className="scroll-down">
            <span></span>
            Pastga aylantiring
          </a>
        </section>

        <section className="info-layout">
          <div id="about" className="info-box about-box">
            <div className="section-heading reveal">
              <p className="eyebrow">MEN HAQIMDA</p>
              <h2>
                O‘zim haqimda <span className="gradient-text">qisqacha</span>
              </h2>
              <p>Men kimman va nimalar bilan shug‘ullanaman?</p>
            </div>

            <div className="about-card glass-card reveal">
              <div className="card-icon">👨‍💻</div>
              <h3>Salom, men Ikrom!</h3>

              <p>
                Men Bozorov Ikromman. Frontend dasturlashga qiziqaman.
                HTML, CSS, JavaScript va React yordamida zamonaviy
                veb-sahifalar yarataman.
              </p>

              <p>
                Maqsadim — foydalanuvchilar uchun qulay, tezkor,
                chiroyli va barcha qurilmalarda ishlaydigan saytlar yaratish.
              </p>

              <a href="#contact" className="text-link">
                Men bilan bog‘laning ↗
              </a>
            </div>

            <div className="about-details">
              <div className="detail-card glass-card reveal">
                <span className="detail-icon">🎯</span>
                <div>
                  <h3>Maqsadim</h3>
                  <p>Professional frontend dasturchi bo‘lib rivojlanish.</p>
                </div>
              </div>

              <div className="detail-card glass-card reveal">
                <span className="detail-icon">📚</span>
                <div>
                  <h3>Doimiy o‘rganish</h3>
                  <p>Yangi bilimlar va zamonaviy texnologiyalarni o‘rganish.</p>
                </div>
              </div>

              <div className="detail-card glass-card reveal">
                <span className="detail-icon">💡</span>
                <div>
                  <h3>Qiziqishlarim</h3>
                  <p>Web dizayn, animatsiya, UI/UX va dasturlash.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="skills" className="info-box skills-box">
            <div className="section-heading reveal">
              <p className="eyebrow">TEXNOLOGIYALAR</p>
              <h2>
                Mening <span className="gradient-text">ko‘nikmalarim</span>
              </h2>
              <p>O‘rgangan va foydalanadigan texnologiyalarim.</p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  className="skill-card glass-card reveal"
                  key={skill.name}
                  style={{ '--delay': `${(index % 4) * 100}ms` }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-arrow">↗</span>
                </div>
              ))}
            </div>

            <div className="learning-note reveal">
              <span>🌱</span>
              <p>
                <strong>Hozirgi yo‘nalishim:</strong> React, komponentlar,
                API bilan ishlash va responsive dizayn.
              </p>
            </div>
          </div>
        </section>

        <section className="work-layout">
          <div id="projects" className="work-box projects-box">
            <div className="section-heading reveal">
              <p className="eyebrow">MENING ISHLARIM</p>
              <h2>
                Tayyorlagan <span className="gradient-text">loyihalarim</span>
              </h2>
              <p>Frontend bilimlarim asosida yaratilgan loyihalar.</p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article
                  className="project-card glass-card reveal"
                  key={project.number}
                >
                  <div className="project-top">
                    <span className="project-number">{project.number}</span>
                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>

                  <div className="project-art">
                    <span>{project.icon}</span>
                    <div className="art-circle"></div>
                    <div className="art-circle art-circle-two"></div>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <a href="#contact" className="project-link">
                    Batafsil ma’lumot <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div id="certificate" className="work-box certificate-box">
            <div className="section-heading reveal">
              <p className="eyebrow">YUTUQLARIM</p>
              <h2>
                Mening <span className="gradient-text">sertifikatim</span>
              </h2>
              <p>O‘qish va o‘z ustimda ishlash davomida olgan sertifikatim.</p>
            </div>

            <div className="certificate-info glass-card reveal">
              <div className="certificate-icon">🏆</div>
              <span className="certificate-label">TASDIQLANGAN SERTIFIKAT</span>

              <h3>React Frontend Development</h3>

              <p>
                International Accreditation Center of the United States
                tomonidan berilgan React Frontend Development dasturi
                bo‘yicha sertifikat.
              </p>

              <div className="certificate-meta">
                <div>
                  <span>Ism</span>
                  <strong>Ikrom Bozorov</strong>
                </div>
                <div>
                  <span>Dastur davomiyligi</span>
                  <strong>120 soat</strong>
                </div>
                <div>
                  <span>Berilgan sana</span>
                  <strong>12.09.2026</strong>
                </div>
                <div>
                  <span>Sertifikat raqami</span>
                  <strong>IAC7465701205</strong>
                </div>
              </div>

              <a
                href="https://app.iacus.org/verify/IAC7465701205"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary certificate-button"
              >
                Sertifikatni tekshirish ↗
              </a>
            </div>

            <div className="certificate-image-wrap reveal">
              <img
                src="/image.png"
                alt="React Frontend Development sertifikati"
                className="certificate-image"
              />
              <p className="certificate-image-label">
                Sertifikat
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading reveal">
            <p className="eyebrow">ALOQA</p>
            <h2>
              Keling, birga <span className="gradient-text">ishlaymiz</span>
            </h2>
            <p>Savol yoki loyiha bo‘lsa, menga xabar yuboring.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info glass-card reveal">
              <h3>Bog‘lanish ma’lumotlari</h3>
              <p>
                Yangi g‘oyalar va qiziqarli loyihalar haqida
                suhbatlashishga tayyorman.
              </p>

              <a
                href="https://t.me/Ikromjon_B1"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <span>✈️</span>
                <div>
                  <small>Telegram</small>
                  <strong>@Ikromjon_B1</strong>
                </div>
                <span className="contact-arrow">↗</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <span>🐙</span>
                <div>
                  <small>GitHub</small>
                  <strong>GitHub profilim</strong>
                </div>
                <span className="contact-arrow">↗</span>
              </a>
            </div>

            <form
              className="contact-form glass-card reveal"
              onSubmit={handleSubmit}
            >
              <h3>Menga xabar yuboring</h3>

              <label htmlFor="name">Ismingiz</label>
              <input
                id="name"
                type="text"
                placeholder="Ismingizni kiriting"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <label htmlFor="email">Email manzilingiz</label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <label htmlFor="message">Xabaringiz</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Xabaringizni yozing..."
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <button type="submit" className="btn btn-primary submit-button">
                Xabar yuborish ↗
              </button>

              <p className="form-note">
                Yuborish tugmasi email dasturini ochadi.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          <span className="logo-icon">I</span>
          <span>Ikrom<span className="logo-dot">.</span></span>
        </a>

        <p>© 2026 Bozorov Ikrom. Barcha huquqlar himoyalangan.</p>

        <a href="#home" className="back-top">Tepaga ↑</a>
      </footer>
    </div>
  );
}

export default App;