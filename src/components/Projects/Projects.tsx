import React from 'react';
import style from './Projects.module.css';
import containerStyle from './../../commons/Container.module.css';
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    return (
        <div className={style.projects}>
            <h2 className={style.title}>MY PROJECTS</h2>
            <div className={containerStyle.container}>
                <div>
                    <ProjectsCard address={''}/>
                    <ProjectsCard address={''}/>
                </div>
                <div>
                    <ProjectsCard address={''}/>
                    <ProjectsCard address={''}/>
                </div>
                <div>
                    <ProjectsCard address={''}/>
                    <ProjectsCard address={''}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;