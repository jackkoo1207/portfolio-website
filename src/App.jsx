import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import ContactIcon from './components/ContactIcon';

// Simple working components

function Home() {
  return (
    <Layout title="Home">
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <img src="/portfolio-website/icon.png" alt="Jack Cool" style={{ 
          height: '200px', 
          width: '200px', 
          borderRadius: '50%', 
          objectFit: 'cover',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          border: '3px solid black',
          marginBottom: '24px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }} 
        />
        <h2 style={{ fontSize: '2.5em', marginBottom: '16px' }}>
          Hi, I'm Koo Ho yin, <span style={{ fontFamily: 'Pacifico, cursive', color: '#278405' }}>Jack</span>
        </h2>
        <p style={{ fontSize: '1.2em', color: '#555', lineHeight: '1.7', marginBottom: '30px' }}>
          I am a passionate developer interested in AI-integrated web applications, Agentic AI and robotics.
          Currently pursuing CS & Physics & AI at HKUST. Welcome to my portfolio!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Link
            to="/about-me"
            style={{
              padding: '12px 28px',
              background: '#278405',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 4px 16px rgba(39,132,5,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            About Me
          </Link>
          <Link
            to="/projects"
            style={{
              padding: '12px 28px',
              border: '2px solid #333',
              color: '#333',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; }}
            onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
          >
            View Projects
          </Link>
        </div>
      </div>
    </Layout>
  );
}

function AboutMe() {
  return (
    <Layout title="About Me">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header: Photo + Greeting */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap', marginBottom: '36px' }}>
          <div>
            <img src="/portfolio-website/icon.png" alt="Jack Cool" style={{ 
              height: '200px', 
              width: '200px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '3px solid black',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }} 
            />
          </div>
          <div style={{ maxWidth: '400px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.8em', marginBottom: '6px' }}>
              Hi, I'm <span style={{ fontFamily: 'Pacifico, cursive', color: '#278405' }}>Jack Koo</span>
            </h2>
            <p style={{ fontSize: '1em', color: '#666', lineHeight: '1.6' }}>
              I have been interested in getting my hands dirty since I was a child.
            </p>
          </div>
        </div>

        {/* Journey Timeline */}
        <div style={{ textAlign: 'left' }}>
          
          <div style={{
            borderLeft: '3px solid #278405',
            paddingLeft: '20px',
            marginBottom: '28px',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              left: '-8px',
              top: '4px',
              width: '13px',
              height: '13px',
              borderRadius: '50%',
              background: '#278405',
            }} />
            <h3 style={{ fontSize: '1.1em', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>
              🤖 Freshman — RoboMaster Robotics Team
            </h3>
            <p style={{ fontSize: '0.95em', color: '#555', lineHeight: '1.7', margin: 0 }}>
              This motivated me to join a robotics team at HKUST called RoboMaster when I was a freshman.
              At that time, I was a mechanical engineer who was responsible for building the robot chassis.
            </p>
          </div>

          <div style={{
            borderLeft: '3px solid #278405',
            paddingLeft: '20px',
            marginBottom: '28px',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              left: '-8px',
              top: '4px',
              width: '13px',
              height: '13px',
              borderRadius: '50%',
              background: '#278405',
            }} />
            <h3 style={{ fontSize: '1.1em', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>
              💻 Shift to Software — AI & Robotics Research
            </h3>
            <p style={{ fontSize: '0.95em', color: '#555', lineHeight: '1.7', margin: 0 }}>
              By working with the software and hardware teams, I realised I was more interested in software development, where I could expand my creativity efficiently using code.
              Previously, I have been working on some AI projects, including a multi-agent reinforcement learning model for simulating robotic swarms and collaborated with the robotics team to build a robotic fish that applies the model.
            </p>
          </div>

          <div style={{
            borderLeft: '3px solid #278405',
            paddingLeft: '20px',
            marginBottom: '28px',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              left: '-8px',
              top: '4px',
              width: '13px',
              height: '13px',
              borderRadius: '50%',
              background: '#278405',
            }} />
            <h3 style={{ fontSize: '1.1em', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>
              🌤️ Internship — HKO AI Chatbot (Squid)
            </h3>
            <p style={{ fontSize: '0.95em', color: '#555', lineHeight: '1.7', margin: 0 }}>
              Now, I am having an internship at the Hong Kong Observatory as a website developer, where I am responsible for building an AI chatbot forecaster called Squid on the HKO website. It is capable of making weather predictions based on the reports from thousands of weather forecasters.
              This experience solidified my interests as an LLM application engineer.
            </p>
          </div>

          <div style={{
            borderLeft: '3px solid #278405',
            paddingLeft: '20px',
            marginBottom: '32px',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              left: '-8px',
              top: '4px',
              width: '13px',
              height: '13px',
              borderRadius: '50%',
              background: '#278405',
            }} />
            <h3 style={{ fontSize: '1.1em', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>
              🚀 Future — Physical AI & Robotics
            </h3>
            <p style={{ fontSize: '0.95em', color: '#555', lineHeight: '1.7', margin: 0 }}>
              In my future career, I am looking forward to integrating AI into robotics, not only because of my strong interests in robotics and coding, but also because I believe that such physical AI is the way to make AI more accessible to the public, and I want to be part of this revolution.
            </p>
          </div>

        </div>

        {/* Contact */}
        <div style={{ textAlign: 'center', borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
          <h3 style={{ fontSize: '1.1em', fontWeight: 600, color: '#333', marginBottom: '14px' }}>Contact:</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <ContactIcon 
              href="mailto:hykoo@connect.ust.hk" 
              src="/portfolio-website/HKUST.png" 
              alt="HKUST Email" 
            />
            <ContactIcon 
              href="https://www.instagram.com/jackkoo2.0/" 
              src="/portfolio-website/instagram.png" 
              alt="Instagram" 
            />
            <ContactIcon 
              href="https://github.com/jackkoo1207" 
              src="/portfolio-website/github.png" 
              alt="GitHub" 
            />
            <ContactIcon 
              href="https://www.linkedin.com/in/koo-ho-yin-7a1176210/" 
              src="/portfolio-website/Linklin.png" 
              alt="LinkedIn" 
            />
          </div>
        </div>

      </div>
    </Layout>
  );
}

function Education() {
  const education = [
    {
      logo: '/portfolio-website/HKUST2.png',
      logoWidth: '100%',
      school: 'Hong Kong University of Science and Technology',
      degree: "Bachelor's Degree",
      period: '2022 – 2026',
      details: [
        { label: '1st Major', value: 'Computer Science and Engineering' },
        { label: 'Extended Major', value: 'Artificial Intelligence' },
        { label: '2nd Major', value: 'Physics (Honors Option)' },
        { label: 'Minor', value: 'Mathematics' },
      ],
      color: '#6c5ce7',
    },
    {
      logo: '/portfolio-website/NTU.png',
      logoWidth: '90%',
      school: 'Nanyang Technological University',
      degree: 'Summer Exchange',
      period: '2025 Summer',
      details: [
        { label: 'Program', value: 'Overseas Exchange Semester' },
      ],
      color: '#0984e3',
    },
    {
      logo: '/portfolio-website/FUB.png',
      logoWidth: '90%',
      school: 'Freie Universität Berlin',
      degree: 'Winter Exchange',
      period: '2026 Winter',
      details: [
        { label: 'Program', value: 'Overseas Exchange Semester' },
      ],
      color: '#e17055',
    },
  ];

  return (
    <Layout title="Education">
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
        {education.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: '30px',
              alignItems: 'stretch',
              marginBottom: i < education.length - 1 ? '32px' : 0,
              position: 'relative',
            }}
          >
            {/* Timeline connector */}
            {i < education.length - 1 && (
              <div style={{
                position: 'absolute',
                left: '80px',
                top: '100px',
                bottom: '-32px',
                width: '2px',
                background: '#e5e7eb',
                zIndex: 0,
              }} />
            )}

            {/* Logo column */}
            <div style={{
              flex: '0 0 160px',
              display: 'flex',
              alignItems: 'stretch',
              zIndex: 1,
            }}>
              <div style={{
                width: '100%',
                borderRadius: '16px',
                background: '#fff',
                border: '1px solid #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                <img
                  src={item.logo}
                  alt={item.school}
                  style={{
                    width: item.logoWidth,
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
            </div>

            {/* Content card */}
            <div style={{
              flex: 1,
              background: '#ffffff',
              borderRadius: '16px',
              padding: '28px 32px',
              color: '#1a1a1a',
              border: '1px solid #d1d5db',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#9ca3af';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap', marginBottom: '6px' }}>
                <h3 style={{ fontSize: '1.2em', fontWeight: 700, color: '#1a1a1a', margin: 0 }}>
                  {item.degree}
                </h3>
                <span style={{ fontSize: '0.85em', color: '#888', fontWeight: 500 }}>
                  {item.period}
                </span>
              </div>
              <p style={{ fontSize: '0.95em', color: '#666', fontWeight: 500, margin: '0 0 14px' }}>
                {item.school}
              </p>

              {item.details.length > 0 && (
                <div style={{
                  background: '#f3f4f6',
                  borderRadius: '10px',
                  padding: '14px 18px',
                }}>
                  {item.details.map((d, j) => (
                    <div key={j} style={{
                      display: 'flex',
                      gap: '8px',
                      fontSize: '0.9em',
                      lineHeight: '1.6',
                      color: '#333',
                      marginBottom: j < item.details.length - 1 ? '4px' : 0,
                    }}>
                      <span style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>{d.label}:</span>
                      <span>{d.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

function ProjectsCard({ id, image, title, description }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onClick={() => navigate(`/projects/${id}`)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        padding: '24px 20px',
        transition: 'all 0.3s ease-out',
        transform: hovered ? 'translate(-2px, -2px)' : 'none',
        textDecoration: 'none',
        color: 'inherit',
        border: '1px solid',
        borderColor: hovered ? '#bbb' : '#e5e7eb',
        background: hovered ? '#fff' : '#fafafa',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: '10px',
          overflow: 'hidden',
          background: '#f0f0f0',
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* Title + Arrow */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginTop: '16px',
          fontWeight: 600,
          fontSize: '16px',
          color: '#1a1a1a',
        }}
      >
        <span>{title}</span>
        <svg
          style={{
            width: '14px',
            height: '14px',
            stroke: 'currentColor',
            fill: 'none',
            strokeWidth: 2.4,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            transition: 'all 0.2s ease-out',
            transform: hovered ? 'translate(2px, -2px)' : 'translate(-1px, 1px)',
          }}
          viewBox="0 0 13 15"
        >
          <g>
            <polyline
              style={{
                transition: 'all 0.2s ease-out',
                opacity: hovered ? 1 : 0,
              }}
              points="5.33 0 10.83 5.5 5.33 11"
            />
            <line
              style={{
                transition: 'all 0.2s ease-out',
                transform: hovered ? 'translateX(0)' : 'translateX(-4px)',
                opacity: hovered ? 1 : 0,
              }}
              x1="10.83"
              y1="5.5"
              x2="0.83"
              y2="5.17"
            />
          </g>
        </svg>
      </div>

      {/* Description */}
      <p
        style={{
          margin: '4px 0 0',
          fontSize: '14px',
          color: '#666',
          lineHeight: '1.4',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {description}
      </p>
    </div>
  );
}

const projectItems = [
  {
    id: 'weather-chatbot',
    title: 'AI Weather Forecaster Chatbot',
    description: 'RAG chatbot using Firebase, MongoDB, PineCone, and Deepseek V4-flash for weather and visibility prediction queries.',
    href: '#!',
    image: '/portfolio-website/Squid.png',
    fullDescription: 'Built an AI-powered weather forecasting chatbot for the Hong Kong Observatory (HKO) that answers queries about weather conditions and visibility predictions using a Retrieval-Augmented Generation (RAG) architecture.',
    details: [
      'Developed a RAG chatbot using Firebase for web hosting and backend infrastructure',
      'Used MongoDB for structured SQL queries and PineCone for vector embeddings similarity search',
      'Integrated Deepseek V4-flash as the base LLM model for natural language understanding',
      'Used pytesseract for OCR, whisper for transcription, and other Python tools to extract text from Word, PowerPoint, and PDF files',
      'Code generation assisted by OpenClaw for rapid development',
    ],
    tech: ['Firebase', 'MongoDB', 'PineCone', 'Deepseek V4', 'Python', 'RAG', 'agent tool-calling','LLM-wiki'],
    role: 'Website Developer Intern',
    period: '2026 Jan - July',
    gallery: [
      { src: '/portfolio-website/Squid.png', width: 800, height: 640, alt: 'Weather Chatbot Interface' },
      { src: '/portfolio-website/Squid2.png', width: 800, height: 640, alt: 'Upload Interface' },
      { src: '/portfolio-website/Squid3.png', width: 800, height: 400, alt: 'Upload Interface' },
    ],
  },
  {
    id: 'robomaster',
    title: 'RoboMaster Robotics Team',
    description: 'Champion team member for CAD design of robotic cars, collaborating with software and hardware teams at HKUST.',
    href: '#!',
    image: '/portfolio-website/CAD.png',
    fullDescription: 'Joined the HKUST RoboMaster robotics team as a member specializing in CAD design for competitive robotic systems. Contributed to building and optimizing the mechanical design of robotic cars used in national-level competitions.',
    details: [
      'Joined as a member of the robotics team called RoboMaster',
      'Champion team for the selection process of the team members',
      'Participated in the CAD design of the robotic cars',
      'Collaborated with other software and hardware teams to build the robotic systems',
    ],
    tech: ['CAD Design', 'SolidWorks', 'Robotics', 'Mechanical Engineering','Budget Control'],
    role: 'Robotics Team Member',
    period: '2022 - 2023',
    gallery: [
      { src: '/portfolio-website/CAD.png', width: 700, height: 300, alt: 'CAD Design of Robotic Car' },
      { src: '/portfolio-website/Robomaster.jpg', width: 700, height: 400, alt: 'RoboMaster Team Photo' },
    ],
  },
  {
    id: 'robotic-swarms',
    title: 'Robotic Swarms Simulation via Reinforcement Learning',
    description: 'Simulating collective motion of robotic swarms using multi-agent reinforcement learning.',
    href: '#!',
    image: '/portfolio-website/col.png',
    fullDescription: 'Trained a supervised multi-agent reinforcement learning model based on zebrafish behavioral video data to simulate collective motion in robotic swarms. Collaborated with robotics engineers to develop a physical robotic fish that applies the learned model.',
    details: [
      'Trained a supervised multi-agent reinforcement learning model based on zebrafish video data',
      'Collaborated with the robotics engineering department to develop a robotic fish that applies the machine learning model',
      'Secured funding from the Undergraduate Research Opportunities Program (UROP) to support the research project',
    ],
    tech: ['Reinforcement Learning', 'Multi-Agent Systems', 'Robotics', 'Computer Vision', 'Python'],
    role: 'Research Assistant',
    period: '2025 - 2026',
    gallery: [
      { src: '/portfolio-website/collective.png', width: 800, height: 200, alt: 'Zebrafish Collective Behavior Data' },
   { src: '/portfolio-website/fish.png', width: 300, height: 200, alt: 'Robotic fish' },
    ],
  },
];

function Projects() {
  return (
    <Layout title="Projects">
      <p
        style={{
          maxWidth: '700px',
          margin: '0 auto 32px',
          fontSize: '15px',
          color: '#666',
          lineHeight: '1.6',
        }}
      >
        Here are some of the projects I've been working on. I enjoy creating new things and coming up with new ideas.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {projectItems.map((item, i) => (
          <ProjectsCard
            key={i}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Layout>
  );
}

function Awards() {
  const awards = [
    {
      emoji: '🎓',
      title: 'First Honor Graduate',
      institution: 'HKUST',
      detail: 'CGA: 3.82 / 4.3 · MCGA: 3.90 / 4.3',
      color: '#6c5ce7',
    },
    {
      emoji: '🏆',
      title: 'Champion Team',
      institution: 'RoboMaster Team Selection',
      detail: 'Top team in the competitive selection process',
      color: '#00b894',
    },
    {
      emoji: '💰',
      title: 'UROP Research Funding',
      institution: 'HKUST Undergraduate Research Opportunities Program',
      detail: 'Secured funding for multi-agent RL research on robotic swarms',
      color: '#0984e3',
    },
    {
      emoji: '🥉',
      title: '38th Chinese Physics Olympiad',
      institution: 'Bronze Medal',
      detail: 'National-level physics competition',
      color: '#e17055',
    },
  ];

  return (
    <Layout title="Awards">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {awards.map((award, i) => (
          <div
            key={i}
            style={{
              background: `linear-gradient(135deg, ${award.color} 0%, ${award.color}dd 100%)`,
              borderRadius: '16px',
              padding: '28px',
              color: '#fff',
              textAlign: 'center',
              boxShadow: `0 6px 24px ${award.color}33`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 12px 36px ${award.color}55`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 6px 24px ${award.color}33`;
            }}
          >
            <div style={{ fontSize: '3em', marginBottom: '12px' }}>{award.emoji}</div>
            <h3 style={{ fontSize: '1.3em', fontWeight: 700, margin: '0 0 6px', color: '#fff' }}>
              {award.title}
            </h3>
            <p style={{ fontSize: '0.9em', opacity: 0.85, fontWeight: 500, margin: '0 0 8px' }}>
              {award.institution}
            </p>
            <p style={{ fontSize: '0.85em', opacity: 0.7, margin: 0, lineHeight: '1.4' }}>
              {award.detail}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const galleryRef = React.useRef(null);
  const activeIndexRef = React.useRef(0);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const project = projectItems.find((p) => p.id === id);

  const handleGalleryScroll = React.useCallback(() => {
    const el = galleryRef.current;
    if (!el || !project?.gallery) return;
    const imgs = el.children;
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    for (let i = 0; i < imgs.length; i++) {
      const imgEl = imgs[i];
      const imgCenter = imgEl.offsetLeft + imgEl.offsetWidth / 2;
      const dist = Math.abs(center - imgCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    }
    if (closest !== activeIndexRef.current) {
      activeIndexRef.current = closest;
      setActiveIndex(closest);
    }
  }, [project?.gallery]);

  const snapToImage = React.useCallback((index) => {
    const el = galleryRef.current;
    if (!el || !el.children[index]) return;
    const img = el.children[index];
    el.scrollTo({
      left: img.offsetLeft - el.clientWidth / 2 + img.offsetWidth / 2,
      behavior: 'smooth',
    });
    activeIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  if (!project) {
    return (
      <Layout title="Project Not Found">
        <p style={{ color: '#999', fontSize: '18px' }}>
          The project you're looking for doesn't exist.{' '}
          <Link to="/projects" style={{ color: '#278405', textDecoration: 'underline' }}>
            Back to Projects
          </Link>
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={project.title}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>

        {/* Back button */}
        <Link
          to="/projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#666',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 500,
            marginBottom: '24px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#278405')}
          onMouseLeave={(e) => (e.target.style.color = '#666')}
        >
          ← Back to Projects
        </Link>

        {/* Snap-scroll Gallery with Dots */}
        <div style={{ position: 'relative', marginBottom: '32px' }}>
          <style>{`
            .gallery-scroll::-webkit-scrollbar { display: none; }
            .gallery-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
          <div
            ref={galleryRef}
            onScroll={handleGalleryScroll}
            className="gallery-scroll"
            style={{
              width: '100%',
              overflowX: 'auto',
              overflowY: 'hidden',
              whiteSpace: 'nowrap',
              display: 'flex',
              gap: '16px',
              borderRadius: '16px',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingBottom: '4px',
            }}
          >
            {project.gallery?.map((img, i) => (
              <div
                key={i}
                style={{
                  scrollSnapAlign: 'center',
                  flexShrink: 0,
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: img.width + 'px',
                    height: img.height + 'px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '14px',
            }}
          >
            {project.gallery?.map((_, i) => (
              <button
                key={i}
                onClick={() => snapToImage(i)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  background: activeIndex === i ? '#333' : '#d1d5db',
                  transition: 'background 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>

        {/* Role + Period */}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <span style={{ fontSize: '14px', color: '#666', background: '#f3f4f6', padding: '6px 14px', borderRadius: '20px', fontWeight: 500 }}>
            {project.role}
          </span>
          <span style={{ fontSize: '14px', color: '#666', background: '#f3f4f6', padding: '6px 14px', borderRadius: '20px', fontWeight: 500 }}>
            {project.period}
          </span>
        </div>

        {/* Full Description */}
        <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#444', marginBottom: '28px' }}>
          {project.fullDescription}
        </p>

        {/* Details */}
        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '16px' }}>
          Key Details
        </h3>
        <ul style={{ paddingLeft: '20px', fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '28px' }}>
          {project.details.map((d, i) => (
            <li key={i} style={{ marginBottom: '6px' }}>{d}</li>
          ))}
        </ul>

        {/* Tech Stack */}
        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}>
          Technologies
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
          {project.tech.map((t, i) => (
            <span
              key={i}
              style={{
                fontSize: '13px',
                fontWeight: 500,
                color: '#1a1a1a',
                background: '#f0f0f0',
                border: '1px solid #e0e0e0',
                padding: '6px 14px',
                borderRadius: '20px',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <Router basename="/portfolio-website">
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: 'white',
        margin: 0,
        padding: 0
      }}>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
          }
          html {
            margin: 0;
            padding: 0;
            scroll-behavior: smooth;
          }
        `}</style>
        <div style={{ height: '130px', overflow: 'hidden', textAlign: 'center', margin: 0, padding: 0 }}>
          <img src="/portfolio-website/banner.gif" alt="Banner" style={{ width: '100%', height: '130px', objectFit: 'cover', display: 'block' }} />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;