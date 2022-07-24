import React from 'react';
import style from './Projects.module.css';

type ProjectsCard = {
    address: string
}

const ProjectsCard = (props: ProjectsCard) => {
    return (
        <div className={style.element}>
            <a href={props.address}></a>
        </div>
    );
};

export default ProjectsCard;