import React, { useState } from 'react';
import {
  Award,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Download,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import './App.css';
import profileImage from './images/Cleyton.jpeg';
import opticaLogin from './images/optica/login.png';
import opticaConsultation from './images/optica/consultation.png';
import apmMain from './images/apm/main.jpeg';
import apmUsers from './images/apm/users.jpeg';

const contacts = {
  email: 'cleyton.mulhovo@gmail.com',
  phone: '+258 843 861 102',
  altPhone: '+258 833 629 476',
  location: 'Maputo, Moçambique',
  github: 'https://github.com/Mulhovo4',
  linkedin: 'https://www.linkedin.com/in/cleyton-mulhovo-4a4b75303/',
  cv: '/Cleyton_Mulhovo_CV.pdf',
};

const highlights = [
  { value: '4+', label: 'projetos digitais entregues' },
  { value: '<1 min', label: 'geração de relatórios antes manual' },
  { value: '4', label: 'escritórios ligados por VPN' },
  { value: '2025', label: 'licenciatura em Engenharia Informática' },
];

const experience = [
  {
    role: 'Digital Learning Intern',
    company: 'UNICEF Moçambique',
    period: 'Dez 2025 - Mai 2026',
    location: 'Maputo',
    summary:
      'Desenvolvimento de aplicações web interativas para a plataforma Maza e UNICEF Learning Passport, integração de APIs, testes funcionais e apoio num pipeline de vídeos educativos com Inteligência Artificial.',
    focus: ['HTML5', 'CSS3', 'JavaScript', 'APIs', 'QA', 'IA'],
  },
  {
    role: 'Software Engineer / Network Administrator',
    company: 'Profissionais da Óptica',
    period: 'Abr 2025 - Nov 2025',
    location: 'Maputo',
    summary:
      'Conceção de um sistema completo de gestão clínica, APIs RESTful com autenticação JWT, deployment com Docker em Linux Ubuntu e ligações VPN entre Maputo, Inhambane, Tete e Nampula.',
    focus: ['React', 'Node.js', 'Docker', 'Linux', 'JWT', 'VPN'],
  },
  {
    role: 'Software Developer - Estagiário',
    company: 'Vulcan Moçambique',
    period: 'Set 2024 - Abr 2025',
    location: 'Tete',
    summary:
      'Contribuição no projeto Application Portfolio Management, com desenvolvimento back-end, auditorias de código e colaboração com Git/GitHub em ambiente de equipa.',
    focus: ['Back-end', 'Git/GitHub', 'Code Review', 'APM'],
  },
];

const projects = [
  {
    title: 'Sistema de Gestão Clínica de Optometria',
    company: 'Profissionais da Óptica',
    year: '2025',
    image: opticaLogin,
    secondaryImage: opticaConsultation,
    description:
      'Plataforma para consultas, vendas, relatórios e painel de controlo. Automatizou relatórios de vendas que antes levavam cerca de um dia para menos de um minuto.',
    tags: ['React', 'Node.js', 'MySQL', 'Docker', 'Linux', 'VPN'],
  },
  {
    title: 'Application Portfolio Management',
    company: 'Vulcan Moçambique',
    year: '2024 - 2025',
    image: apmMain,
    secondaryImage: apmUsers,
    description:
      'Solução para governação e ciclo de vida de aplicações, com funcionalidades back-end, gestão de utilizadores e participação em auditorias de código.',
    tags: ['React', 'Node.js', 'MySQL', 'Git', 'DevOps'],
  },
  {
    title: 'Aplicações Educativas Interativas',
    company: 'UNICEF Moçambique',
    year: '2025 - 2026',
    image: profileImage,
    description:
      'Recursos web interativos com animações, síntese de voz, consumo de APIs e testes de qualidade para experiências digitais de aprendizagem.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'QA', 'IA'],
  },
  {
    title: 'Canais Digitais e Integração USSD',
    company: 'Projetos técnicos',
    year: '2026',
    image: opticaConsultation,
    description:
      'Conhecimento prático com tecnologia USSD, comandos AT, gestão de SMS e integração via Web Serial API para comunicação com modem WWAN.',
    tags: ['USSD', 'Web Serial API', 'Comandos AT', 'SMS', 'REST'],
  },
];

const skillGroups = [
  {
    title: 'Front-end',
    icon: Code2,
    items: ['React', 'JavaScript ES6', 'HTML5', 'CSS3', 'Interfaces interativas', 'Animações'],
  },
  {
    title: 'Back-end e APIs',
    icon: BriefcaseBusiness,
    items: ['Node.js', 'Python 3', 'RESTful APIs', 'HTTP/HTTPS', 'JWT', 'OAuth2'],
  },
  {
    title: 'Dados e BI',
    icon: Sparkles,
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Firebase', 'Power BI'],
  },
  {
    title: 'DevOps e Qualidade',
    icon: ShieldCheck,
    items: ['Docker', 'Linux Ubuntu', 'Git/GitHub', 'CI/CD básico', 'SQA', 'Testes funcionais'],
  },
];

const certifications = [
  'Cybersecurity Essentials - Cisco Networking Academy',
  'Introduction to Data Science - Cisco Networking Academy',
  'Introduction to React - MetaBrains/Udemy',
  'Generative AI for Web Developers: AI-Powered Pair Programming - LinkedIn Learning',
  'Project Management Foundations - LinkedIn Learning/NASBA/PMI',
  'Project Management Foundations: Risk - LinkedIn Learning/NASBA/PMI',
  'Strategic Communication for Leaders - LinkedIn Learning/PMI',
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand-mark" href="#home" onClick={closeMenu} aria-label="Cleyton Mulhovo">
          <span>CM</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`nav-links ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          <a href="#projects" onClick={closeMenu}>Projetos</a>
          <a href="#experience" onClick={closeMenu}>Experiência</a>
          <a href="#skills" onClick={closeMenu}>Competências</a>
          <a href="#contact" onClick={closeMenu}>Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Desenvolvedor Full Stack - Engenharia Informática</p>
            <h1>Cleyton Edmilson Inguane Mulhovo</h1>
            <p className="hero-text">
              Engenheiro Informático focado em desenvolvimento Full Stack, APIs RESTful,
              qualidade de software, automação de processos e infraestruturas Linux com Docker.
            </p>

            <div className="contact-strip" aria-label="Dados de contacto">
              <span><MapPin size={18} />{contacts.location}</span>
              <span><Phone size={18} />{contacts.phone} / {contacts.altPhone}</span>
            </div>

            <div className="hero-actions">
              <a className="primary-action" href={`mailto:${contacts.email}`}>
                <Mail size={18} />
                Contactar
              </a>
              <a className="secondary-action" href={contacts.cv} download>
                <Download size={18} />
                Baixar CV
              </a>
            </div>
          </div>

          <div className="hero-portrait" aria-label="Fotografia de Cleyton Mulhovo">
            <img src={profileImage} alt="Cleyton Mulhovo" />
            <div className="availability-note">
              <span>Aberto a oportunidades em software, QA e operações digitais</span>
            </div>
          </div>
        </section>

        <section className="metrics-band" aria-label="Destaques profissionais">
          {highlights.map((item) => (
            <div className="metric-item" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="section-block" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Portfólio aplicado</p>
            <h2>Projetos com impacto operacional</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-media">
                  <img src={project.image} alt={`${project.title} - ${project.company}`} />
                  {project.secondaryImage && (
                    <img className="project-media-inset" src={project.secondaryImage} alt="" aria-hidden="true" />
                  )}
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.company}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block experience-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Trajetória</p>
            <h2>Experiência profissional</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-topline">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <p className="company-name">{item.company}</p>
                  <p>{item.summary}</p>
                  <div className="tag-list compact">
                    {item.focus.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Stack técnico</p>
            <h2>Competências organizadas para entrega</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <article className="skill-card" key={title}>
                <div className="skill-title">
                  <Icon size={22} />
                  <h3>{title}</h3>
                </div>
                <div className="tag-list">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="credentials-band">
          <div className="education-panel">
            <GraduationCap size={28} />
            <div>
              <p className="eyebrow">Formação</p>
              <h2>Licenciatura em Engenharia Informática</h2>
              <p>Instituto Superior Politécnico de Tete (ISPT) - Fev 2021 a Jul 2025</p>
            </div>
          </div>

          <div className="certification-panel">
            <Award size={28} />
            <div>
              <p className="eyebrow">Certificações</p>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert}>
                    <ChevronRight size={16} />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="language-panel">
            <Languages size={28} />
            <div>
              <p className="eyebrow">Idiomas</p>
              <p>Português nativo/fluente. Inglês fluente - nível 4 pelo Instituto de Línguas de Moçambique.</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>Vamos construir algo útil, estável e bem cuidado.</h2>
            <p>
              Disponível para oportunidades em desenvolvimento de software, QA,
              automação, aplicações digitais e operações técnicas.
            </p>
          </div>

          <div className="contact-actions">
            <a href={`mailto:${contacts.email}`}><Mail size={18} />{contacts.email}</a>
            <a href={`tel:${contacts.phone.replace(/\s/g, '')}`}><Phone size={18} />{contacts.phone}</a>
            <a href={contacts.github} target="_blank" rel="noreferrer"><Github size={18} />GitHub</a>
            <a href={contacts.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Cleyton Mulhovo</span>
        <span>Desenvolvido com React</span>
      </footer>
    </div>
  );
}

export default App;
