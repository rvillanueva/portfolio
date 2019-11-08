import React from 'react';
import './about-page.css';
import {Navbar} from '../../components';

function AboutPage() {
  function calculateYears(startYear) {
    return (new Date().getYear() + 1900) - startYear;
  }
  const skills = [{
    label: 'Javascript',
    year: 2001,
    helperText: 'Yes, I made a Harry Potter fanfic site when I was 9.'
  }, {
    label: 'Node.js',
    year: 2014
  }, {
    label: 'AWS',
    year: 2014
  }, {
    label: 'Postgres',
    year: 2017
  }, {
    label: 'React',
    year: 2016
  }, {
    label: 'Babel'
  }, {
    label: 'Wordpress',
    year: 2012
  }, {
    label: 'MongoDB'
  }, {
    label: 'Express'
  }, {
    label: 'Python'
  }, {
    label: 'SQL'
  },
  {
    label: 'SCSS'
  },
  {
    label: 'Angular.js'
  }
]
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-container">
        <div className="about-line">
          <label className="about-line__label">Resume</label>
          <div className="about-line__content">
            <a href="https://www.linkedin.com/in/ryanjvillanueva/">LinkedIn</a>
          </div>
        </div>
        <div className="about-line">
          <label className="about-line__label">Code Samples</label>
          <div className="about-line__content">
            <a href="https://github.com/rvillanueva">Github</a>
          </div>
        </div>
        <div className="about-line">
          <label className="about-line__label">Skills</label>
          <div className="about-line__content">
            <div className="about__skills">
              {skills.map((skill, s) => <div key={s} className="about__skill-item">
                {skill.label}{skill.year ? ` (${calculateYears(skill.year)} years)` : null}
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
