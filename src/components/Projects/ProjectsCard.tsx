import React from 'react';
import style from './Projects.module.scss';

type ProjectsCard = {
    address: string
    title: string
    description: string
    style: {  }
}

const ProjectsCard = (props: ProjectsCard) => {
    return (
        <div className={style.element}>
            <div className={style.image} style={props.style}>
                <a className={style.viewButton} href={props.address}>Watch</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default ProjectsCard;