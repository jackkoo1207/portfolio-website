import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ContactIcon from './components/ContactIcon';

// Simple working components

function Home() {
  return (
    <Layout title="About Me">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap' }}>
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
        
        <div style={{ maxWidth: '500px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '10px' }}>
            Koo Ho yin, <span style={{ fontFamily: 'Pacifico, cursive', color: 'black' }}>Jack</span>
          </h2>
          <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>UG CS & Phys & AI - HKUST</p>
          
          <h3>Contact:</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', margin: '20px 0', flexWrap: 'wrap' }}>
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
          
          <div style={{ 
            textAlign: 'left', 
            marginTop: '30px', 
            padding: '20px', 
            backgroundColor: '#f9f9f9', 
            borderRadius: '10px',
            borderLeft: '4px solid #278405'
          }}>
            <h4 style={{ marginBottom: '15px' }}>Introduction</h4>
            <p style={{ lineHeight: '1.6' }}>
              I am currently an Undergraduate  student at HKUST. I am interested in qunatum computing, computational physics and machine learning.
              I am passionate about exploring the intersection of these fields and their potential applications.
              You can know more about me through my portfolio website.
              </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Education() {
  return (
    <Layout title="Education">
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'stretch', gap: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '250px', display: 'flex', alignItems: 'center' }}>
          <img 
            src="/portfolio-website/HKUST2.png" 
            alt="HKUST Logo" 
            style={{ 
              width: '80%', 
              height: '100%', 
              
              borderRadius: '10px'
            }} 
          />
        </div>
        <div style={{ flex: '1', minWidth: '300px', padding: '30px', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ color: '', fontSize: '2em', marginBottom: '10px' }}>Bachelor's Degree: HKUST</h2>
    
          <p style={{ color: '#777', fontWeight: 'bold', fontSize: '1.1em', marginBottom: '25px' }}>2022-2026</p>
          
          <div style={{ textAlign: 'left', marginTop: '25px' }}>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><span style={{color:'#000', fontWeight: 'bold'}}>1st major:</span> Computer Science and Engineering
                <div style={{ marginLeft: '20px' }}>
                  <span style={{color:'#000', fontWeight: 'bold'}}>Extended major:</span> Artificial Intelligence
                </div>
              </li>
              <li><span style={{color:'#000', fontWeight: 'bold'}}>2nd major:</span>  Physics (Honors Option)</li>
              <li><span style={{color:'#000', fontWeight: 'bold'}}>Minor:</span> Mathematics</li>
            </ul>
          </div>
        </div>
      </div>
       <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'stretch', gap: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '250px', display: 'flex', alignItems: 'center' }}>
          <img 
            src="/portfolio-website/NTU.png" 
            alt="NTU Logo" 
            style={{ 
              width: '50%', 
              height: '100%', 
              
              borderRadius: '10px'
            }} 
          />
        </div>
        <div style={{ flex: '1', minWidth: '300px', padding: '30px', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ color: '', fontSize: '2em', marginBottom: '10px' }}>2025 Summer Exchange: NTU(Singapore)</h2>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'stretch', gap: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '250px', display: 'flex', alignItems: 'center' }}>
          <img 
            src="/portfolio-website/FUB.png" 
            alt="FUB Logo" 
            style={{ 
              width: '50%', 
              height: '100%', 
              
              borderRadius: '10px'
            }} 
          />
        </div>
        <div style={{ flex: '1', minWidth: '300px', padding: '30px', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ color: '', fontSize: '2em', marginBottom: '10px' }}>2026 Winter Exchange: FUB(Germany)</h2>
        </div>
      </div>
    </Layout>
  );
}

function WorkExperience() {
  return (
    <Layout title="Work Experience">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', color: 'white', borderRadius: '15px', padding: '30px', marginBottom: '20px', boxShadow: '0 8px 32px rgba(17, 153, 142, 0.3)' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '10px' }}>Sector-based Significant Convection Forecast</h2>
          <h3 style={{ fontSize: '1.4em', marginBottom: '5px', opacity: '0.9' }}>Hong Kong Observatory</h3>
          <h2 style={{ fontSize: '1.4em', marginBottom: '5px' }}>Website Developer Intern</h2>
          <p style={{ color: '#e0e0e0', fontWeight: 'bold', marginBottom: '20px' }}>2026 Jan-July</p>
          <ul style={{ textAlign: 'left' }}>
            <li>Developed web applications using HTML, CSS, JavaScript and PHP</li>
            <li>It displays the radar images and the rainfall percentages </li>
          </ul>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src="/portfolio-website/HKO.gif" style={{ width: '40%', height: '40%', objectFit: 'cover', display: 'block',borderRadius: '15px' }} />
        </div>
        <div style={{ background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)', color: '#2c3e50', borderRadius: '15px', padding: '30px', boxShadow: '0 8px 32px rgba(255, 154, 158, 0.3)' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '10px' }}>Quantum Talent Accelerator: From Classical to Quantum Communication Network</h2>
          <h3 style={{ fontSize: '1.4em', marginBottom: '5px', opacity: '0.8', color: '#2c3e50' }}>Hong Kong Academy of Gifted Education</h3>
          <h3 style={{ fontSize: '1.4em', marginBottom: '5px', opacity: '0.8', color: '#2c3e50' }}>Mentor</h3>
          <p style={{ color: '#34495e', fontWeight: 'bold', marginBottom: '20px' }}>2025 Sep </p>
          <ul style={{ textAlign: 'left' }}>
            <li>Teach high school students basic concepts of quantum computing and image processing</li>
            <li>Teach them how to use quantum computing software(qiskit)</li>
          </ul>
        </div>
         <img 
            src="/portfolio-website/QHED2.png" 
            alt="Berry Phase" 
            style={{ 
              width: '700px', 
              height: '100%', 
              borderRadius: '10px'
            }} 
          />
           <img 
            src="/portfolio-website/QHED.png" 
            alt="Berry Phase" 
            style={{ 
              width: '700px', 
              height: '100%', 
              borderRadius: '10px'
            }} 
          />
          
           <div style={{ background: 'linear-gradient(135deg, #2c3e50 0%, #4a6741 100%)', color: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 8px 32px rgba(44, 62, 80, 0.3)' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '10px' }}>Quantum Quest: Practical Experience for Gifted Students</h2>
          <h3 style={{ fontSize: '1.4em', marginBottom: '5px', opacity: '0.9', color: '#ecf0f1' }}>Hong Kong Academy of Gifted Education</h3>
          <h3 style={{ fontSize: '1.4em', marginBottom: '5px', opacity: '0.9', color: '#ecf0f1' }}>Mentor</h3>
          <p style={{ color: '#bdc3c7', fontWeight: 'bold', marginBottom: '20px' }}>2024 Sep</p>
          <ul style={{ textAlign: 'left' }}>
            <li>Teach high school students basic concepts of quantum mechanics and Berry phase</li>
            <li>Teach them how to use lab equipment (e.g. optical fibre) and standard scientific computing software (numpy, matplotlib, scipy)</li>
          </ul>
        </div>
        
      </div>
      <img 
            src="/portfolio-website/Berry_phase.png" 
            alt="Berry Phase" 
            style={{ 
              width: '500px', 
              height: '300px', 
              borderRadius: '10px'
            }} 
          />
          <img 
            src="/portfolio-website/Berry_phase.jpg" 
            alt="Berry Phase" 
            style={{ 
              width: '200px', 
              height: '300px', 
              borderRadius: '10px'
            }} 
          /> 
    </Layout>
  );
}

function Research() {
  return (
    <Layout title="Research">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '15px', padding: '30px', marginBottom: '20px', boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)' }}>
          <h2 style={{ color: '#ffffff', fontSize: '2em', marginBottom: '10px' }}>Generalizable Single-view 3D Head Avatar Generation System</h2>
          <p style={{ color: '#e8eaff', fontWeight: 'bold', marginBottom: '15px' }}>2025 - Present</p>
          <p style={{ color: '#d1d5ff', fontWeight: 'bold', marginBottom: '10px' }}>Supervisor: Professor Dan Xu</p>
          <ul style={{ textAlign: 'left', color: '#ffffff', fontSize: '1.1em', lineHeight: '1.6', marginBottom: '20px' }}>
            <li>Generating a 3D Gaussian head based on a single 2D image and enabling facial feature editing</li>
            <li>Achieving better generalization speed and 3D consistency than state-of-the-art models such as GOAE and GAGA-avatar</li>
            <li>Using Gaussian splatting and GANs to construct an animatable talking head</li>
          </ul>
        </div>
      </div>
       <img 
            src="/portfolio-website/gs.gif" 
            alt="Berry Phase" 
            style={{ 
              width: '200px', 
              height: '300px', 
              borderRadius: '10px'
            }} 
          /> 
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', borderRadius: '15px', padding: '30px', marginBottom: '20px', boxShadow: '0 8px 32px rgba(17, 153, 142, 0.3)' }}>
          <h2 style={{ color: '#ffffff', fontSize: '2em', marginBottom: '10px' }}>Moiré Graphene</h2>
          <p style={{ color: '#d4edda', fontWeight: 'bold', marginBottom: '15px' }}>2025 - Present</p>
          <p style={{ color: '#c3f7d0', fontWeight: 'bold', marginBottom: '10px' }}>Supervisor: Professor Liu Junwei</p>
          <ul style={{ textAlign: 'left', color: '#ffffff', fontSize: '1.1em', lineHeight: '1.6', marginBottom: '20px' }}>
            <li>Studying the conductivity of moiré graphene under different twist angles</li>
            <li>Using tight binding models to simulate the band structure of moiré graphene under different twist angles</li>
            <li>Using the Kubo-Bastin formula to calculate the conductivity of moiré graphene under different twist angles</li>
            <li>Use Kernal Polynomial Method (KPM) to speed up the calculation of conductivity</li>
            <li>Using multiprocessing libraries such as Ray and OpenMP to speed up the simulation</li>
            <li>Using GPU acceleration libraries such as CuPy to speed up the simulation</li>
          </ul>
        </div>
      </div>
      
       <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)', borderRadius: '15px', padding: '30px', marginBottom: '20px', boxShadow: '0 8px 32px rgba(255, 107, 107, 0.3)' }}>
          <h2 style={{ color: '#ffffff', fontSize: '2em', marginBottom: '10px' }}>Physics-guided data-driven modeling to understand complex phenomena and to solve real-world problems</h2>
          <p style={{ color: '#fff2e6', fontWeight: 'bold', marginBottom: '15px' }}>2025 - 2026</p>
          <p style={{ color: '#ffe0cc', fontWeight: 'bold', marginBottom: '10px' }}>Supervisor: Professor Zhang Rui, Professor Li Sai Ping</p>
          <ul style={{ textAlign: 'left', color: '#ffffff', fontSize: '1.1em', lineHeight: '1.6', marginBottom: '20px' }}>
            <li>Investigating the swarming behavior of zebrafish and applying such swarming strategies to robotic swarms</li>
            <li>Trained a supervised multi-agent reinforcement learning model based on zebrafish video data</li>
            <li>Collaborated with the robotics engineering department to develop a robotic fish that applies the machine learning model</li>
            <li>Secured funding from the Undergraduate Research Opportunities Program (UROP) to support the research project</li>
          </ul>
         
        </div>
      </div>
       <img 
            src="/portfolio-website/collective.png" 
            alt="Berry Phase" 
            style={{ 
              width: '800px', 
              height: '200px', 
              borderRadius: '10px'
            }} 
          /> 
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)', borderRadius: '15px', padding: '30px', marginBottom: '20px', boxShadow: '0 8px 32px rgba(52, 152, 219, 0.3)' }}>
          <h2 style={{ color: '#ffffff', fontSize: '2em', marginBottom: '10px' }}>Diffusion of Nanoparticles in a Potential Landscape</h2>
          <p style={{ color: '#d6eaf8', fontWeight: 'bold', marginBottom: '15px' }}>2025 - 2026</p>
          <p style={{ color: '#aed6f1', fontWeight: 'bold', marginBottom: '10px' }}>Supervisor: Professor Michael Kwok Yee WONG</p>
          <ul style={{ textAlign: 'left', color: '#ffffff', fontSize: '1.1em', lineHeight: '1.6', marginBottom: '20px' }}>
            <li>Modelled the energy landscape in postsynaptic terminals due to interactions with proteins</li>
            <li>Simulated the mixed diffusion of proteins around potential wells and geometric wells using the Gillespie algorithm and Monte Carlo algorithm</li>
            <li>The paper is currently under peer review for publication in Physical Review Letters</li>
          </ul>
         
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img 
          src="/portfolio-website/diffusion.png" 
          alt="Diffusion Simulation 1" 
          style={{ 
            width: '700px', 
            height: '300px', 
            borderRadius: '10px'
          }} 
        /> 
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img 
          src="/portfolio-website/diffusion2.jpeg" 
          alt="Diffusion Simulation 2" 
          style={{ 
            width: '700px', 
            height: '300px', 
            borderRadius: '10px'
          }} 
        /> 
      </div> 
       <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #8e44ad 0%, #e74c3c 100%)', borderRadius: '15px', padding: '30px', marginBottom: '20px', boxShadow: '0 8px 32px rgba(142, 68, 173, 0.3)' }}>
          <h2 style={{ color: '#ffffff', fontSize: '2em', marginBottom: '10px' }}>Theoretical modeling of energy wall</h2>
          <p style={{ color: '#f8d7da', fontWeight: 'bold', marginBottom: '15px' }}>2025 - 2026</p>
          <p style={{ color: '#f1c2c3', fontWeight: 'bold', marginBottom: '10px' }}>Supervisor: Professor Hyokeun Park</p>
          <ul style={{ textAlign: 'left', color: '#ffffff', fontSize: '1.1em', lineHeight: '1.6', marginBottom: '20px' }}>
            <li>This project is in collaboration with the Diffusion of Nanoparticles in a Potential Landscape, but it is more focused on the experimental data collection</li>
            <li>Analyzed the experimental data using OpenCV and ImageJ for particle tracking</li>
          </ul>
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img 
          src="/portfolio-website/diffusion3.png" 
          alt="Diffusion Analysis" 
          style={{ 
            width: '500px', 
            height: '200px', 
            borderRadius: '10px'
          }} 
        /> 
      </div> 
    </Layout>
  );
}

function Awards() {
  return (
    <Layout title="Awards">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)', borderRadius: '15px', padding: '25px', marginBottom: '20px', boxShadow: '0 8px 32px rgba(162, 155, 254, 0.3)' }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.5em', marginBottom: '10px' }}>Dean's List</h3>
          <p style={{ color: '#ddd6fe', fontWeight: 'bold', marginBottom: '5px' }}>HKUST</p>
          <p style={{ color: '#c4b5fd', fontWeight: 'bold', marginBottom: '15px' }}>Year 2-3 Fall and Spring</p>
        </div>
        
        <div style={{ background: 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)', borderRadius: '15px', padding: '30px', color: 'white', boxShadow: '0 8px 32px rgba(0, 184, 148, 0.3)' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '25px', textAlign: 'center', color: '#ffffff' }}>38th Chinese Physics Olympiad - Bronze Medal</h2>
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
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/research" element={<Research />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;