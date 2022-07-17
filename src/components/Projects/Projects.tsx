import React from 'react';
import style from './Projects.module.css';

const Projects = () => {
    return (
        <div className={style.projects}>
            <h3 className={style.projectsH3}>MY PROJECTS</h3>
            <div className={style.projectscontainer}>
                <div>
                    <div className={style.projectelement}></div>
                    <div className={style.projectelement}></div>
                </div>
                <div>
                    <div className={style.projectelement}></div>
                    <div className={style.projectelement}></div>
                </div>
                <div>
                    <div className={style.projectelement}></div>
                    <div className={style.projectelement}></div>
                </div>
            </div>
        </div>
    );
};

export default Projects;