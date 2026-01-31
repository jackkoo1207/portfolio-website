import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ title, children }) {
  return (
    <>
      {/* Header Section */}
      <header style={{
        backgroundColor: '#020B00',
        padding: '15px 20px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/favicon.png" alt="Icon" style={{ height: '40px', borderRadius: '50%', marginRight: '15px' }} />
          <Link to="/" style={{ 
            fontSize: '25px', 
            fontFamily: 'Pacifico, cursive',
            color: 'white',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#278405';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'white';
          }}>Jack Cool</Link>
        </div>
        <nav>
          <Link to="/education" style={{ color: 'white', marginRight: '20px', textDecoration: 'none', fontFamily: 'monospace', transition: 'color 0.3s ease' }}
            onMouseEnter={(e) => { e.target.style.color = '#278405'; }}
            onMouseLeave={(e) => { e.target.style.color = 'white'; }}>Education</Link>
          <Link to="/work-experience" style={{ color: 'white', marginRight: '20px', textDecoration: 'none', fontFamily: 'monospace', transition: 'color 0.3s ease' }}
            onMouseEnter={(e) => { e.target.style.color = '#278405'; }}
            onMouseLeave={(e) => { e.target.style.color = 'white'; }}>Work Experience</Link>
          <Link to="/research" style={{ color: 'white', marginRight: '20px', textDecoration: 'none', fontFamily: 'monospace', transition: 'color 0.3s ease' }}
            onMouseEnter={(e) => { e.target.style.color = '#278405'; }}
            onMouseLeave={(e) => { e.target.style.color = 'white'; }}>Research</Link>
          <Link to="/awards" style={{ color: 'white', textDecoration: 'none', fontFamily: 'monospace', transition: 'color 0.3s ease' }}
            onMouseEnter={(e) => { e.target.style.color = '#278405'; }}
            onMouseLeave={(e) => { e.target.style.color = 'white'; }}>Awards</Link>
        </nav>
      </header>

      {/* Page Content Section */}
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <hr style={{ width: '100%', border: '1.5px solid #333' }} />
          <h1 style={{ margin: '0', padding: '10px 20px', border: '3px solid #333', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
            {title}
          </h1>
          <hr style={{ width: '100%', border: '1.5px solid #333' }} />
        </div>
        {children}
      </div>
    </>
  );
}

export default Layout;