import React, { Component } from 'react';

// IconScout SVG URLs
const skills = [
  { 
    name: 'HTML 5', 
    iconUrl: 'https://cdn.iconscout.com/icon/free/png-512/html5-40-1175193.png', 
    color: '#fff' 
  },
  { 
    name: 'CSS 3', 
    iconUrl: 'https://cdn.iconscout.com/icon/free/png-512/css3-11-1175239.png', 
    color: '#fff' 
  },
  { 
    name: 'Bootstrap', 
    iconUrl: 'https://cdn.iconscout.com/icon/free/png-512/bootstrap-226077.png', 
    color: '#fff' 
  },
  { 
    name: 'React', 
    iconUrl: 'https://cdn.iconscout.com/icon/free/png-512/react-3-1175109.png', 
    color: '#fff' 
  },
  { 
    name: 'Shopify', 
    iconUrl: 'https://cdn.iconscout.com/icon/free/png-512/shopify-226579.png', 
    color: '#fff' 
  },
  { 
    name: 'WordPress', 
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/174/174881.png',
    color: '#fff' 
  },
  { 
    name: 'Framer', 
    iconUrl: 'https://framerusercontent.com/images/TvJ9grdPgk3sRz6T6XwkpBrFr4k.png?scale-down-to=512', 
    color: '#fff' 
  }
];

class Skills extends Component {
  render() {
    return (
      <div id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h2 className="section-title">
              <span className="text-white">SKILLS</span>
            </h2>
          </div>
          <div className="col-md-12 text-center">
            <div className="skill-icon">
              {skills.map((skill, index) => (
                <div key={index} className="skills-tile" style={{ '--order': index + 1 }}>
                  <img 
                    src={skill.iconUrl} 
                    alt={skill.name} 
                    width="50" 
                    style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.2))' }} 
                  />
                  <p style={{ color: skill.color }}>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
