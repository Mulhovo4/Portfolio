import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, MapPin, Phone, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import opticaLogin from './images/Cleyton.jpeg';

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestão Clínica de Optometria',
      company: 'Profissionais da Óptica',
      description: 'Sistema completo para gestão de consultas, vendas e relatórios. Automatização de relatórios de vendas reduzindo o tempo de elaboração de cerca de um dia para menos de um minuto. Implementação de pipeline Docker e configuração VPN ligando 4 escritórios.',
      tags: ['React', 'Node.js', 'Docker', 'MySQL', 'VPN'],
      year: '2025'
    },
    {
      id: 2,
      title: 'Interface Web de Monitorização GSM',
      company: 'Command Line',
      description: 'Interface web para monitorização que organiza e visualiza dados transmitidos por módulos GSM. Proposta de arquitecturas escaláveis e seguras para melhorar a comunicação e eficiência na gestão de dados.',
      tags: ['React', 'Express.js', 'GSM', 'Real-time'],
      year: '2025'
    },
    {
      id: 3,
      title: 'Sistema APM (Application Portfolio Management)',
      company: 'Vulcan Moçambique',
      description: 'Contribuição para o projecto de Gestão do Portfólio de Aplicações implementado pela Vulcan para optimizar a governação e o ciclo de vida das aplicações. Desenvolvimento de funcionalidades backend e participação em auditorias de código.',
      tags: ['React', 'Node.js', 'MySQL', 'DevOps'],
      year: '2024-2025'
    },
    {
      id: 4,
      title: 'Wellness Check System',
      company: 'MPDC / P&O Maritime',
      description: 'Sistema para monitorização da saúde dos colaboradores e bem-estar no local de trabalho. Foco na usabilidade, desempenho e processamento seguro de dados em conformidade com normas de privacidade.',
      tags: ['React', 'Node.js', 'MongoDB', 'Privacy'],
      year: '2025'
    }
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript (ES6)', 'HTML5', 'CSS3', 'Responsive Design', 'Bootstrap', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'SQL Server']
    },
    {
      category: 'DevOps & Tools',
      items: ['Docker', 'Git/GitHub', 'Linux Ubuntu', 'VPN Config', 'Railway', 'Vercel']
    }
  ];

  const certifications = [
    'Fundamentos de Cibersegurança - Cisco',
    'Introdução à Ciência de Dados - Cisco',
    'Introdução ao React - MetaBrains/Udemy',
    'Controlo de Versões com Git e GitHub - DIO',
    'Ciclo de Vida do Processo de Ciência de Dados - DIO'
  ];

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#e2e8f0', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: '#1e293b',
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid #334155'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#06b6d4', fontFamily: 'monospace' }}>
            {'<CM />'}
          </div>
          <button
            onClick={toggle}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#06b6d4',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div style={{ display: 'flex', gap: '24px' }} className="nav-links">
            <a href="#home" style={{ color: '#e2e8f0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#06b6d4'} onMouseLeave={(e) => e.target.style.color = '#e2e8f0'}>Home</a>
            <a href="#projects" style={{ color: '#e2e8f0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#06b6d4'} onMouseLeave={(e) => e.target.style.color = '#e2e8f0'}>Projetos</a>
            <a href="#skills" style={{ color: '#e2e8f0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#06b6d4'} onMouseLeave={(e) => e.target.style.color = '#e2e8f0'}>Skills</a>
            <a href="#contact" style={{ color: '#e2e8f0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#06b6d4'} onMouseLeave={(e) => e.target.style.color = '#e2e8f0'}>Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: '#06b6d4', lineHeight: '1.2' }}>
                Cleyton Edmilson Inguane Mulhovo
              </h1>
              <h2 style={{ fontSize: '1.5rem', color: '#94a3b8', marginBottom: '20px' }}>
                Engenheiro Informático
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px', color: '#cbd5e1' }}>
                Especialista em desenvolvimento de software, administração de redes e transformação digital. Experiência em aplicações web escaláveis, ambientes Docker e infraestruturas Linux.
              </p>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8' }}>
                  <MapPin size={18} />
                  Maputo, Moçambique
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8' }}>
                  <Phone size={18} />
                  +258 843 861 102
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="mailto:cleyton.mulhovo@gmail.com" style={{
                  backgroundColor: '#06b6d4',
                  color: '#0f172a',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'transform 0.2s'
                }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <Mail size={18} />
                  Contacto
                </a>
                <a href="#projects" style={{
                  border: '1px solid #06b6d4',
                  color: '#06b6d4',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'all 0.2s'
                }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#06b6d4'; e.currentTarget.style.color = '#0f172a'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#06b6d4'; }}>
                  Ver Projectos
                </a>
              </div>
            </div>
            <div
              style={{
                width: '100%',
                height: '400px',
                backgroundColor: '#334155',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #06b6d4'
              }}
            >
              <img
                src={opticaLogin}
                alt="Tela de login - Sistema de Gestão Clínica de Optometria"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // ✅ preenche o espaço sem distorcer
                  borderRadius: '10px'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '50px', textAlign: 'center', color: '#06b6d4' }}>
            Projetos Realizados
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {projects.map((project) => (
              <div key={project.id} style={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '24px',
                transition: 'transform 0.2s, border-color 0.2s'
              }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = '#06b6d4'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#334155'; }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                  <h3 style={{ color: '#06b6d4', fontSize: '1.25rem', fontWeight: '600' }}>{project.title}</h3>
                  <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{project.year}</span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '12px', fontStyle: 'italic' }}>
                  {project.company}
                </p>
                <p style={{ color: '#cbd5e1', marginBottom: '16px', lineHeight: '1.6' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} style={{
                      backgroundColor: '#334155',
                      color: '#06b6d4',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      fontSize: '0.875rem'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '80px 24px', backgroundColor: '#1e293b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '50px', textAlign: 'center', color: '#06b6d4' }}>
            Competências Técnicas
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            {skills.map((skillGroup, idx) => (
              <div key={idx} style={{
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '24px'
              }}>
                <h3 style={{ color: '#06b6d4', marginBottom: '16px', fontSize: '1.25rem' }}>{skillGroup.category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} style={{
                      backgroundColor: '#334155',
                      color: '#e2e8f0',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '0.875rem'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#0f172a',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Award size={24} color="#06b6d4" />
              <h3 style={{ color: '#06b6d4', fontSize: '1.25rem' }}>Certificações</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {certifications.map((cert, idx) => (
                <li key={idx} style={{
                  color: '#cbd5e1',
                  padding: '8px 0',
                  borderBottom: idx < certifications.length - 1 ? '1px solid #334155' : 'none'
                }}>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <GraduationCap size={32} color="#06b6d4" />
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#06b6d4' }}>Formação</h2>
              </div>
              <div style={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '24px'
              }}>
                <h3 style={{ color: '#06b6d4', marginBottom: '8px' }}>Licenciatura em Engenharia Informática</h3>
                <p style={{ color: '#94a3b8', marginBottom: '8px' }}>Instituto Superior Politécnico de Tete (ISPT)</p>
                <p style={{ color: '#cbd5e1' }}>Fev 2021 – Jul 2025</p>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Briefcase size={32} color="#06b6d4" />
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#06b6d4' }}>Experiência</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <h4 style={{ color: '#06b6d4', marginBottom: '4px' }}>Profissionais da Óptica</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Engenheiro de Software / Admin de Rede • Abr 2025 – Presente</p>
                </div>
                <div style={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <h4 style={{ color: '#06b6d4', marginBottom: '4px' }}>Command Line</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Analista de Telecomunicações • Mai 2025 – Presente</p>
                </div>
                <div style={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <h4 style={{ color: '#06b6d4', marginBottom: '4px' }}>Vulcan</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Desenvolvedor de Software (Estagiário) • Set 2024 – Abr 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '80px 24px', backgroundColor: '#1e293b' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px', color: '#06b6d4' }}>
            Entre em contacto
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: '#cbd5e1' }}>
            Estou sempre aberto a novas oportunidades e projetos desafiadores. Vamos conversar!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="mailto:cleyton.mulhovo@gmail.com" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#06b6d4',
              textDecoration: 'none',
              fontSize: '1.1rem',
              padding: '12px 24px',
              border: '1px solid #06b6d4',
              borderRadius: '6px',
              transition: 'all 0.2s'
            }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#06b6d4'; e.currentTarget.style.color = '#0f172a'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#06b6d4'; }}>
              <Mail size={20} />
              Email
            </a>
            <a href="https://github.com/Mulhovo4" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#06b6d4',
              textDecoration: 'none',
              fontSize: '1.1rem',
              padding: '12px 24px',
              border: '1px solid #06b6d4',
              borderRadius: '6px',
              transition: 'all 0.2s'
            }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#06b6d4'; e.currentTarget.style.color = '#0f172a'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#06b6d4'; }}>
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/cleyton-mulhovo-4a4b75303/" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#06b6d4',
              textDecoration: 'none',
              fontSize: '1.1rem',
              padding: '12px 24px',
              border: '1px solid #06b6d4',
              borderRadius: '6px',
              transition: 'all 0.2s'
            }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#06b6d4'; e.currentTarget.style.color = '#0f172a'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#06b6d4'; }}>
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#0f172a',
        padding: '30px 24px',
        textAlign: 'center',
        color: '#94a3b8',
        borderTop: '1px solid #334155'
      }}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Cleyton Mulhovo. Desenvolvido com React.
        </p>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .nav-links {
            display: ${isOpen ? 'flex' : 'none'} !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #1e293b;
            padding: 20px;
            border-top: 1px solid #334155;
          }
        }
      `}</style>
    </div>
  );
}