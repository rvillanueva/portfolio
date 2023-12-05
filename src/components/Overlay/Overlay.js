import React from 'react';
import './overlay.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {CSSTransition} from 'react-transition-group';

function stopClick(e) {
  e.preventDefault();
  e.stopPropagation();
}

function Overlay({close, project}) {
  if(!project) return <div className="overlay" onClick={() => close()}>
    <button className="close-overlay-btn" onClick={close}>
      <FontAwesomeIcon icon={faTimes} />
    </button>
    Project not found.
  </div>;
  return (
    <CSSTransition
      mountOnEnter
      in={!!project}
      timeout={500}
      classNames="fade-in-portfolio">
      <div className="overlay" onClick={() => close()}>
        <button className="close-overlay-btn" onClick={e => {
            stopClick(e);
            close();
          }}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="project-card" onClick={stopClick}>
          <div className="project-card__heading">
            <h1 className="project-card__heading__title">{project.title}</h1>
          </div>
          <div className="project-card__image-container">
            <img className="project-card__image" alt={project.title} src={project.thumbnailUrl}/>
          </div>
          <div className="project-card__description">
            {project.description}
          </div>
        </div>
      </div>
    </CSSTransition>

    
  );
}

export default Overlay;
