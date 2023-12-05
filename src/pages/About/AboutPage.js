import React from 'react';
import './about-page.css';

function AboutPage() {
  function calculateYears(startYear) {
    return (new Date().getYear() + 1900) - startYear;
  }
  const skills = [{
    label: 'HTML/CSS/Javascript',
    year: 2001
  }, {
    label: 'Node.js',
    year: 2014
  }, {
    label: 'AWS',
    year: 2014
  }, {
    label: 'Python',
    year: 2019
  }, {
    label: 'SQL/MySQL/PostgreSQL'
  }, {
    label: 'NoSQL/MongoDB'
  }, {
    label: 'React/Angular.js/Vue.js',
  },
  {
    label: 'SASS/SCSS/Less'
  }, {
    label: 'Wordpress',
    year: 2012
  }
]
  return (
    <div className="about-page">
      <div className="selfie-splash" style={{backgroundImage: `url(./images/self-2.jpg)`}}></div>
      <div className="about-container">
        <div className="about-line-container">
          <div className="about-line">
            <label className="about-line__label">Resume</label>
            <div className="about-line__content">
              <a href="https://www.linkedin.com/in/ryanjvillanueva/">LinkedIn</a>
            </div>
          </div>
          <div className="about-line">
            <label className="about-line__label">Code Samples</label>
            <div className="about-line__content">
              <a href="https://github.com/rvillanueva">GitHub</a>
            </div>
          </div>
          <div className="about-line">
            <label className="about-line__label">Skills</label>
            <div className="about-line__content">
              <div className="about__skills">
                {skills.map((skill, s) => <div key={s} className="about__skill-item">
                  {skill.label}{skill.year ? ` (${calculateYears(skill.year)} years)` : null}
                  {skill.helperText ? <span>

                  </span> : null}
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
