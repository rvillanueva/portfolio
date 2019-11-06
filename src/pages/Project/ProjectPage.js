import React from 'react';
import portfolioData from '../../data/portfolioData';
import './project-page.css';
import {Navbar} from '../../components';

function ProjectPage({match}) {
  const item = portfolioData.items.filter(item => item._id === match.params.projectId)[0];
  if(!item) return <div>
    Project not found.
  </div>;
  return (
    <div className="project-page">
      <Navbar />
      {item.title}
    </div>
  );
}

export default ProjectPage;
