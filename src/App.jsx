import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { projects } from './data/projects.js';
import { skillCategories, skills } from './data/skills.js';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navigation page-width" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Palak Shukla home">
          <span className="wordmark-mark" aria-hidden="true">P</span>
          <span>Palak Shukla</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div id="primary-links" className={`navigation-links${menuOpen ? ' is-open' : ''}`}>
          {navigation.map(({ label, href }) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="navigation-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}

function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links${compact ? ' social-links-compact' : ''}`} aria-label="Social profiles">

      {/* <span className="social-unavailable" title="GitHub profile URL has not been provided">
        <Github size={18} aria-hidden="true" />
        <span>GitHub URL not provided</span>
      </span> */}

    <a
        href="https://github.com/palakshukla23"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Palak Shukla on Github (opens in a new tab)"
      >
        <Github size={18} aria-hidden="true" />
        <span>Github</span>
      </a>

      <a
        href="https://www.linkedin.com/in/palakkshukla/"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Palak Shukla on LinkedIn (opens in a new tab)"
      >
        <Linkedin size={18} aria-hidden="true" />
        <span>LinkedIn</span>
      </a>


      <a href="mailto:palakshukla9876@gmail.com" aria-label="Email Palak Shukla">
        <Mail size={18} aria-hidden="true" />
        <span>Email</span>
      </a>

    </div>
  );
}

function Hero() {
  return (
    <section className="hero page-width" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Available for MERN / Web Dev Roles</p>
        <h1 id="hero-title">
          Hi, I&apos;m <span className="accent-text">Palak Shukla</span>.
          <span className="hero-role">Full-stack developer in the making.</span>
        </h1>
        <p className="hero-intro">
          I&apos;m a CS undergrad who enjoys turning real-world problems into thoughtful,
          data-driven web experiences—from product price insights to location-aware safety tools.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects <ArrowRight size={17} aria-hidden="true" />
          </a>
          <button
            className="button button-secondary button-disabled"
            type="button"
            disabled
            title="A resume PDF has not been added yet"
          >
            <Download size={16} aria-hidden="true" /> Download Resume
          </button>
        </div>
        <p className="resume-note">Resume download will be available when a PDF is added.</p>
        <SocialLinks compact />
      </div>

      <div className="hero-art" aria-label="Initials avatar for Palak Shukla">
        <div className="avatar-orbit avatar-orbit-outer" aria-hidden="true" />
        <div className="avatar-orbit avatar-orbit-inner" aria-hidden="true" />
        <div className="avatar-card">
          <span className="avatar-initials" aria-hidden="true">PS</span>
          <span className="avatar-name">Palak Shukla</span>
          <span className="avatar-caption">Curious by nature. Builder by choice.</span>
        </div>
        <span className="floating-label floating-label-code"><Code2 size={16} aria-hidden="true" /> Build with purpose</span>
        <span className="floating-label floating-label-location">Bengaluru, India</span>
      </div>
      <a className="scroll-cue" href="#about"><ArrowDown size={15} aria-hidden="true" /> Scroll to explore</a>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="section page-width" id="about" aria-labelledby="about-title">
      <SectionHeading
        eyebrow="A little about me"
        title="Curiosity, meet code."
        description="A computer science student drawn to practical ideas, clean interfaces, and the details that make software useful."
        id="about-title"
      />
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I&apos;m pursuing a B.E. in Computer Science &amp; Engineering at East West College
            of Engineering (VTU) in Bengaluru, with an expected graduation in June 2027.
          </p>
          <p>
            I like exploring how technology can solve everyday problems—whether that means
            making e-commerce pricing easier to understand or building a mobile-first way to
            receive nearby safety alerts. I&apos;m continuing to grow across web development,
            data processing, and core computer science.
          </p>
          <a className="text-link" href="#projects">Take a look at what I&apos;ve built <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
        <article className="education-card">
          <span className="card-icon"><BookOpen size={19} aria-hidden="true" /></span>
          <p className="card-kicker">Education</p>
          <h3>B.E. Computer Science &amp; Engineering</h3>
          <p>East West College of Engineering (VTU)</p>
          <span className="education-dates">2023 — 2027 · Expected</span>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="section section-tinted" id="skills" aria-labelledby="skills-title">
      <div className="page-width">
        <SectionHeading
          eyebrow="Tools I work with"
          title="My technical toolkit."
          description="A growing set of languages, frameworks, and fundamentals I use to bring ideas to life."
          id="skills-title"
        />
        <div className="filter-list" role="group" aria-label="Filter skills by category">
          {skillCategories.map(({ id, label }) => (
            <button
              className={`filter-button${activeCategory === id ? ' is-active' : ''}`}
              key={id}
              type="button"
              aria-pressed={activeCategory === id}
              onClick={() => setActiveCategory(id)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="skills-grid" aria-live="polite">
          {filteredSkills.map(({ name, category, Icon }) => (
            <article className="skill-card" key={name}>
              <span className="skill-icon"><Icon size={20} aria-hidden="true" /></span>
              <span className="skill-name">{name}</span>
              <span className="skill-category">{skillCategories.find((item) => item.id === category)?.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ kind }) {
  return (
    <div className={`project-preview project-preview-${kind}`} aria-hidden="true">
      {kind === 'fairlytics' ? (
        <div className="preview-dashboard">
          <div className="preview-topbar"><i /><i /><i /><span>price insights</span></div>
          <div className="preview-content">
            <span className="preview-label">PRICE HISTORY</span>
            <div className="preview-chart"><span /><span /><span /><span /><span /><span /><span /></div>
            <div className="preview-metrics"><i /><i /><i /></div>
          </div>
        </div>
      ) : (
        <div className="preview-alert">
          <span className="preview-pulse" />
          <span className="preview-alert-title">Nearby safety alert</span>
          <span className="preview-alert-line" />
          <span className="preview-alert-line short" />
          <span className="preview-map"><i /><i /><i /></span>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card${project.featured ? ' project-featured' : ''}`}>
      <ProjectPreview kind={project.preview} />
      <div className="project-content">
        <div className="project-topline">
          <span className="project-type">{project.type}</span>
          <span className="project-date">{project.date}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.workflow && (
          <div className="project-detail">
            <span>Workflow</span>
            <p>{project.workflow}</p>
          </div>
        )}
        {project.contribution && (
          <div className="project-detail">
            <span>Technical focus</span>
            <p>{project.contribution}</p>
          </div>
        )}
        <ul className="feature-list" aria-label={`${project.title} key features`}>
          {project.features.map((feature) => (
            <li key={feature}><Check size={14} aria-hidden="true" /> {feature}</li>
          ))}
        </ul>
        <ul className="technology-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-links">
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : (
            <button className="link-unavailable" type="button" disabled title="GitHub repository URL has not been provided">
              <Github size={16} aria-hidden="true" /> GitHub URL not provided
            </button>
          )}
          {project.demoUrl ? (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Live demo <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : (
            <button className="link-unavailable" type="button" disabled title="Live demo URL has not been provided">
              Live demo URL not provided
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section page-width" id="projects" aria-labelledby="projects-title">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects with a purpose."
        description="A closer look at the ideas, workflows, and technologies behind my projects."
        id="projects-title"
      />
      <div className="projects-grid">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section-tinted" id="experience" aria-labelledby="experience-title">
      <div className="page-width">
        <SectionHeading
          eyebrow="Beyond the code"
          title="Community & leadership."
          description="Learning, sharing, and helping create more ways for students to build together."
          id="experience-title"
        />
        <article className="timeline-card">
          <span className="timeline-marker" aria-hidden="true" />
          <div className="timeline-meta">
            <span className="project-type">Campus community</span>
            <span className="project-date">2024 — Present</span>
          </div>
          <h3>Social Media &amp; Community Lead</h3>
          <p className="timeline-org">OSCode EWCE · Official Campus Tech Club</p>
          <ul className="experience-list">
            <li>Managed digital channels and outreach for the campus developer community.</li>
            <li>Designed campaigns that boosted hackathon and technical workshop attendance by 25%.</li>
            <li>Co-organized coding bootcamps and hands-on version control workshops.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  const [formStatus, setFormStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setFormStatus('Please enter a name, a valid email address, and a message.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

    setFormStatus('Your email app should open with a draft. Please review and send it there.');
    window.location.href = `mailto:Palakshukla9876@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section page-width contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-intro">
        <SectionHeading
          eyebrow="Get in touch"
          title="Have an idea? Let’s connect."
          description="Open to conversations about web development, collaboration, and opportunities to learn and build."
          id="contact-title"
        />
        <div className="contact-methods">
          <span className="contact-method contact-unavailable">
            <Github size={19} aria-hidden="true" />
            <span><small>GitHub</small>Profile URL not provided</span>
          </span>
          <a className="contact-method" href="https://www.linkedin.com/in/palak-shukla-ab4155401/" target="_blank" rel="noreferrer">
            <Linkedin size={19} aria-hidden="true" />
            <span><small>LinkedIn</small>Connect with me <ArrowUpRight size={13} aria-hidden="true" /></span>
          </a>
          <a className="contact-method" href="mailto:Palakshukla9876@gmail.com">
            <Mail size={19} aria-hidden="true" />
            <span><small>Email</small>Palakshukla9876@gmail.com <ArrowUpRight size={13} aria-hidden="true" /></span>
          </a>
          
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required maxLength={100} />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} />
        </div>
        <div className="form-field">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="5" placeholder="What would you like to talk about?" required maxLength={5000} />
        </div>
        <button className="button button-primary form-submit" type="submit">
          Prepare email <ArrowRight size={16} aria-hidden="true" />
        </button>
        <p className="form-note" aria-live="polite">
          {formStatus || 'This form opens your email app with a draft; it does not send data to a server.'}
        </p>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-content">
        <a className="wordmark" href="#home">
          <span className="wordmark-mark" aria-hidden="true">P</span>
          <span>Palak Shukla</span>
        </a>
        <p>Designed and built with care. © {new Date().getFullYear()} Palak Shukla.</p>
        <a className="back-to-top" href="#home">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
