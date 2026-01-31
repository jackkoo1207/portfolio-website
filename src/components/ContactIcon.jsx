import React from 'react';

function ContactIcon({ href, src, alt }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img 
        src={src} 
        alt={alt} 
        style={{ 
          height: '40px', 
          width: '40px', 
          borderRadius: '10px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.2)';
          e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
        }} 
      />
    </a>
  );
}

export default ContactIcon;