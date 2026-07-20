import React, { useState } from 'react';
import {
  ArrowUpRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  Eye,
  Gamepad2,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import './App.css';
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
  cv: '/Cleyton_Mulhovo_CV_Transcom.pdf',
};

const highlights = [
  { value: '4+', label: 'projetos digitais entregues' },
  { value: '<1 min', label: 'geração de relatórios antes manual' },
  { value: '4', label: 'escritórios ligados por VPN' },
  { value: '2025', label: 'licenciatura em Engenharia Informática' },
];

const techFlow = [
  'React',
  'Node.js',
  'Python',
  'HTML5',
  'CSS3',
  'JavaScript',
  'E-learning',
  'Docker',
  'Linux',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Power BI',
  'QA',
  'IA',
];

const capabilityCards = [
  {
    label: 'Build',
    title: 'Soluções digitais educativas',
    text: 'Criação de conteúdos interativos web com HTML5, CSS3, JS e integração com ferramentas de Inteligência Artificial para otimizar pipelines de vídeo.',
    points: ['HTML5/CSS/JS', 'E-learning', 'Integração de IA'],
  },
  {
    label: 'Operate',
    title: 'Infraestrutura e redes',
    text: 'Deployment com Docker, servidores Linux Ubuntu, ligações VPN entre escritórios e administração de infraestruturas locais.',
    points: ['Docker', 'Linux Ubuntu', 'VPN'],
  },
  {
    label: 'Validate',
    title: 'Qualidade e conformidade',
    text: 'Testes de garantia de qualidade (QA/SQA), revisão de código e validação de recursos interativos em plataformas digitais de aprendizagem.',
    points: ['QA/SQA', 'Code review', 'Testes de qualidade'],
  },
];

const experience = [
  {
    role: 'Digital Learning Intern',
    company: 'UNICEF Moçambique',
    period: 'Dez 2025 - Mai 2026',
    location: 'Maputo',
    summary:
      'Produção de conteúdos interativos na plataforma Maza e UNICEF Learning Passport. Concepção de animações e elementos gráficos. Integração de Inteligência Artificial para automatizar a produção de vídeos educativos.',
    focus: ['HTML5', 'CSS3', 'JavaScript', 'E-learning', 'IA', 'QA'],
  },
  {
    role: 'Software Engineer / Network Administrator',
    company: 'Profissionais da Óptica',
    period: 'Abr 2025 - Nov 2025',
    location: 'Maputo',
    summary:
      'Concepção de sistema de gestão clínica de optometria com análise de dados. Automatização da geração de relatórios de vendas e administração de servidores Linux com Docker.',
    focus: ['React', 'Node.js', 'Docker', 'Linux', 'VPN'],
  },
  {
    role: 'Software Developer (Estagiário)',
    company: 'Vulcan',
    period: 'Set 2024 - Abr 2025',
    location: 'Tete',
    summary:
      'Contribuição para o projecto Application Portfolio Management (APM) para governação de aplicações. Desenvolvimento de funcionalidades de backend e auditorias de código.',
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
    image: '/assets/Games generator.png',
    description:
      'Recursos web interativos com animações, síntese de voz, consumo de APIs e testes de qualidade para a plataforma Maza e Learning Passport.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'E-learning', 'QA'],
  },
  {
    title: 'Pipeline de Produção de Vídeos com IA',
    company: 'UNICEF Moçambique',
    year: '2026',
    image: null,
    description:
      'Implementação de uma iniciativa inovadora para geração de vídeos educativos utilizando Inteligência Artificial, automatizando o pipeline de vídeo e reduzindo o esforço manual.',
    tags: ['Inteligência Artificial', 'Automação', 'Vídeo Digital', 'Inovação'],
  },
];

const skillGroups = [
  {
    title: 'Educação Digital e E-learning',
    icon: GraduationCap,
    items: ['Produção de conteúdos interativos', 'HTML5 / CSS3 / JS', 'Geração de vídeo com IA', 'Design instrucional'],
  },
  {
    title: 'Desenvolvimento e APIs',
    icon: Code2,
    items: ['React', 'Node.js', 'JavaScript (ES6)', 'Python', 'RESTful APIs'],
  },
  {
    title: 'Dados e Business Intelligence',
    icon: Sparkles,
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Power BI', 'Dashboards interativos'],
  },
  {
    title: 'DevOps e Infraestrutura',
    icon: ShieldCheck,
    items: ['Docker', 'Linux Ubuntu', 'VPN', 'Git/GitHub', 'Railway', 'Vercel'],
  },
];

const certifications = [
  'AI and Generative AI for Video Content Creation — LinkedIn Learning, Fev 2026',
  'Generative AI for Web Developers: AI-Powered Pair Programming — LinkedIn Learning, Dez 2025',
  'Teaching with Technology — LinkedIn Learning, Fev 2026',
  'Cybersecurity Essentials — Cisco Networking Academy',
  'Introduction to Data Science — Cisco Networking Academy',
  'Introduction to React — MetaBrains / Udemy',
  'Project Management Foundations — LinkedIn Learning (NASBA & PMI), Fev 2026',
  'Project Management Foundations: Risk — LinkedIn Learning (NASBA & PMI), Fev 2026',
  'Strategic Communication for Leaders — LinkedIn Learning (PMI), Mar 2026',
];

const interactiveGames = [
  {
    title: 'Lição 3: Princípios de Cortesia',
    description: 'Recurso e-learning interativo focado no ensino de cortesia e boa convivência social através de animações e síntese de voz.',
    url: '/assets/Capitulo 1 - Licao 3 Principios de cortesia.html',
    category: 'E-learning',
    tags: ['HTML5', 'CSS3', 'JS', 'Síntese de Voz', 'UNICEF']
  },
  {
    title: 'Lição 4: Trim Trim',
    description: 'Recurso interativo focado em dinâmicas de conversação e sons, simulando chamadas e respostas de forma divertida.',
    url: '/assets/Capitulo 1 - Licao 4 Trim Trim.html',
    category: 'E-learning',
    tags: ['HTML5', 'CSS3', 'JS', 'Comunicação', 'UNICEF']
  },
  {
    title: 'Lição 7: Sinonímia',
    description: 'Jogo pedagógico interativo para desenvolvimento gramatical e associação correta de sinônimos na língua portuguesa.',
    url: '/assets/Capitulo 1 - Licao 7 Sinonimia.html',
    category: 'E-learning',
    tags: ['HTML5', 'CSS3', 'JS', 'Pedagogia', 'UNICEF']
  },
  {
    title: 'Lição 10: Advérbios',
    description: 'Jogo educativo interativo e dinâmico concebido para identificação e categorização lúdica de advérbios.',
    url: '/assets/Capitulo 1 - Licao 10 Adverbios.html',
    category: 'E-learning',
    tags: ['HTML5', 'CSS3', 'JS', 'Gamificação', 'UNICEF']
  }
];

const designGallery = [
  { title: 'Interface UI Concept', src: '/assets/ChatGPT Image Jul 18, 2026, 08_26_15 PM.png', category: 'UI/UX Mockup' },
  { title: 'Update do Sistema iPhone', src: '/assets/Cópia de iPhone actualização .png', category: 'UI/UX Mockup' },
  { title: 'Cardápio Menu Sobremesas', src: '/assets/Cardápio menu sobremesas simples em vermelho.png', category: 'Design Gráfico' },
  { title: 'UI Dashboard Concept', src: '/assets/Design sem nome.png', category: 'UI/UX Mockup' },
  { title: 'Design Layout Complexo', src: '/assets/Design sem nome (1).png', category: 'Design Gráfico' },
  { title: 'Mockup Publicitário', src: '/assets/1001703881.jpg', category: 'Design Gráfico' },
  { title: 'Composição Visual 1', src: '/assets/1.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 2', src: '/assets/2.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 3', src: '/assets/3.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 4', src: '/assets/4.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 5', src: '/assets/5.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 6', src: '/assets/6.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 7', src: '/assets/7.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 8', src: '/assets/8.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 9', src: '/assets/9.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 10', src: '/assets/10.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 11', src: '/assets/11.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 12', src: '/assets/12.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 13', src: '/assets/13.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 14', src: '/assets/14.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 15', src: '/assets/15.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 16', src: '/assets/16.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 17', src: '/assets/17.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 18', src: '/assets/18.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 19', src: '/assets/19.png', category: 'Design Gráfico' },
  { title: 'Composição Visual 20', src: '/assets/20.png', category: 'Design Gráfico' },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [failedImages, setFailedImages] = useState({});
  const [profileFailed, setProfileFailed] = useState(false);
  const [activeGameUrl, setActiveGameUrl] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [designFilter, setDesignFilter] = useState('Todos');
  const [visibleCount, setVisibleCount] = useState(8);

  const closeMenu = () => setIsOpen(false);

  const handleImageError = (title) => {
    setFailedImages((prev) => ({ ...prev, [title]: true }));
  };

  const filteredDesigns = designGallery.filter(
    (item) => designFilter === 'Todos' || item.category === designFilter
  );

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? filteredDesigns.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === filteredDesigns.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand-mark" href="#home" onClick={closeMenu} aria-label="Cleyton Mulhovo" style={{ padding: '6px' }}>
          <img src="/favicon.png" alt="Cleyton Mulhovo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px' }} />
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
          <a href="#games" onClick={closeMenu}>Jogos Educativos</a>
          <a href="#design" onClick={closeMenu}>Galeria de Design</a>
          <a href="#experience" onClick={closeMenu}>Experiência</a>
          <a href="#skills" onClick={closeMenu}>Competências</a>
          <a href="#contact" onClick={closeMenu}>Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-grid-glow" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">Técnico de Conteúdos Digitais e E-learning</p>
            <h1>Cleyton Mulhovo</h1>
            <p className="hero-text">
              Engenheiro Informático de formação, focado na produção de conteúdos e-learning interativos,
              concepção de materiais educativos digitais e automatização de pipelines de vídeo com Inteligência Artificial.
            </p>

            <div className="hero-actions" style={{ marginTop: '32px' }}>
              <a className="primary-action" href={`mailto:${contacts.email}`}>
                <Mail size={18} />
                Contactar
              </a>
              <a className="secondary-action" href={contacts.cv} download>
                <Download size={18} />
                Baixar CV
              </a>
            </div>

            <div className="hero-metadata" style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 600 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={16} style={{ color: 'var(--accent-blue)' }} /> {contacts.location}
              </span>
              <span>•</span>
              <span>Disponível para regime presencial ou remoto</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="mesh-orb" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="hero-portrait" aria-label="Fotografia de Cleyton Mulhovo">
              {!profileFailed ? (
                <img src="/assets/myself.png" alt="Cleyton Mulhovo" onError={() => setProfileFailed(true)} />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '3rem', fontWeight: 'bold', background: 'var(--bg-surface-solid)', color: 'var(--accent-green)' }}>
                  CM
                </div>
              )}
              <div className="availability-note">
                <span>Aberto a oportunidades em software, QA e operações digitais</span>
              </div>
            </div>
          </div>
        </section>

        <section className="tech-marquee" aria-label="Tecnologias principais">
          <div className="marquee-track">
            {[...techFlow, ...techFlow].map((tech, index) => (
              <span key={`${tech}-${index}`}>{tech}</span>
            ))}
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

        <section className="capability-section" aria-label="Capacidades principais">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Como entrego valor</p>
              <h2>Da ideia ao sistema em produção</h2>
            </div>
            <p>
              Uma combinação prática de produto, engenharia, qualidade e operação técnica,
              pensada para criar software que funciona no dia a dia.
            </p>
          </div>
          <div className="capability-grid">
            {capabilityCards.map((card) => (
              <article className="capability-card" key={card.title}>
                <div className="capability-topline">
                  <span>{card.label}</span>
                  <ArrowUpRight size={20} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className="capability-points">
                  {card.points.map((point) => <span key={point}>{point}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Portfólio aplicado</p>
            <h2>Projetos com impacto operacional</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => {
              const hasImage = project.image && !failedImages[project.title];
              return (
                <article className="project-card" key={project.title}>
                  <div className={`project-media ${!hasImage ? 'image-missing' : ''}`}>
                    {hasImage && (
                      <img 
                        src={project.image} 
                        alt={`${project.title} - ${project.company}`} 
                        onError={() => handleImageError(project.title)}
                      />
                    )}
                    {hasImage && project.secondaryImage && (
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
                    <span className="project-link">Ver impacto <ArrowUpRight size={16} /></span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-block capability-section" id="games">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Playground Interativo</p>
              <h2>Recursos E-learning e Jogos</h2>
            </div>
            <p>
              Exemplos reais de materiais educativos interativos que desenvolvi, utilizando HTML5, CSS3, JavaScript e síntese de voz. Clique para jogar diretamente no portfólio.
            </p>
          </div>

          <div className="capability-grid">
            {interactiveGames.map((game) => (
              <article className="capability-card" key={game.title}>
                <div className="capability-topline">
                  <span>{game.category}</span>
                  <Gamepad2 size={22} />
                </div>
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                <div className="capability-points" style={{ marginBottom: '24px' }}>
                  {game.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <button
                  className="primary-action"
                  style={{ width: '100%', minHeight: '44px', gap: '8px', fontSize: '0.88rem' }}
                  onClick={() => setActiveGameUrl(game.url)}
                >
                  <Play size={16} fill="currentColor" />
                  Jogar Recurso
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="design">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Criativos e Interfaces</p>
              <h2>Galeria de Design Gráfico & UI</h2>
            </div>
            <div>
              <div className="hero-badge-row" style={{ marginTop: 0, justifyContent: 'flex-end', gap: '8px' }}>
                {['Todos', 'UI/UX Mockup', 'Design Gráfico'].map((filter) => (
                  <span
                    key={filter}
                    style={{
                      cursor: 'pointer',
                      background: designFilter === filter ? 'linear-gradient(135deg, #00b88c 0%, #008f6b 100%)' : 'rgba(255, 255, 255, 0.8)',
                      color: designFilter === filter ? '#ffffff' : 'var(--text-secondary)',
                      borderColor: designFilter === filter ? 'var(--accent-green)' : 'var(--border)'
                    }}
                    onClick={() => {
                      setDesignFilter(filter);
                      setVisibleCount(8);
                    }}
                  >
                    {filter === 'Todos' ? 'Todos' : filter === 'UI/UX Mockup' ? 'UI/UX' : 'Design Gráfico'}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {filteredDesigns.slice(0, visibleCount).map((item, idx) => (
              <article
                className="project-card"
                key={`${item.title}-${idx}`}
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveImageIndex(designGallery.findIndex((d) => d.src === item.src))}
              >
                <div className="project-media" style={{ aspectRatio: '4/3' }}>
                  <img src={item.src} alt={item.title} />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0,0,0,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 5
                    }}
                    className="hover-overlay"
                  >
                    <Eye size={28} style={{ color: '#ffffff' }} />
                  </div>
                </div>
                <div className="project-content" style={{ padding: '20px' }}>
                  <div className="project-meta" style={{ marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.75rem' }}>{item.category}</span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>

          {filteredDesigns.length > visibleCount && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <button
                className="secondary-action"
                onClick={() => setVisibleCount((prev) => prev + 8)}
              >
                Mostrar mais designs
              </button>
            </div>
          )}
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
              Disponível para oportunidades em produção de conteúdos e-learning, design instrucional,
              desenvolvimento de soluções interativas e automação de pipelines de vídeo com IA.
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

      {/* Game Modal Overlay */}
      {activeGameUrl && (
        <div className="modal-overlay game-modal-overlay" onClick={() => setActiveGameUrl(null)}>
          <div className="modal-container game-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveGameUrl(null)} aria-label="Fechar jogo">
              <X size={24} />
            </button>
            <div className="game-iframe-wrapper">
              <iframe
                src={activeGameUrl}
                title="E-learning Interactive Game"
                allow="autoplay; encrypted-media; speech-synthesis"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Design Lightbox Modal Overlay */}
      {activeImageIndex !== null && filteredDesigns[activeImageIndex] && (
        <div className="modal-overlay lightbox-modal-overlay" onClick={() => setActiveImageIndex(null)}>
          <button className="modal-close-btn" onClick={() => setActiveImageIndex(null)} aria-label="Fechar visualização">
            <X size={24} style={{ color: '#ffffff' }} />
          </button>
          
          <button 
            className="lightbox-nav-btn prev-btn" 
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            aria-label="Design anterior"
          >
            <ChevronLeft size={36} style={{ color: '#ffffff' }} />
          </button>
          
          <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredDesigns[activeImageIndex].src} 
              alt={filteredDesigns[activeImageIndex].title} 
              style={{ maxWidth: '100%', maxHeight: '75vh', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', objectFit: 'contain' }}
            />
            <div className="lightbox-caption-bar">
              <h3 style={{ margin: '0 0 4px', fontSize: '1.2rem', color: '#ffffff' }}>{filteredDesigns[activeImageIndex].title}</h3>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                {filteredDesigns[activeImageIndex].category} • {activeImageIndex + 1} de {filteredDesigns.length}
              </span>
            </div>
          </div>
          
          <button 
            className="lightbox-nav-btn next-btn" 
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            aria-label="Próximo design"
          >
            <ChevronRight size={36} style={{ color: '#ffffff' }} />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
