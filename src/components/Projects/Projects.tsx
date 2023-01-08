import React from 'react';
import style from './Projects.module.scss';
import containerStyle from './../../commons/Container.module.css';
import ProjectsCard from "./ProjectsCard";
import trelloImage from './../../assets/images/trello.png';
import cosmeticsStoreImage from './../../assets/images/cosmeticsstore.png';
import separatorStyle from "../../commons/Separator.module.scss";

const Projects = () => {
    const trello = {
        backgroundImage: `url(${trelloImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const cosmeticsStore = {
        backgroundImage: `url(${cosmeticsStoreImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div className={style.projects} id="portfolio">
            <div className={style.titleContainer}>
                <h2 className={style.title}>
                    MY
                    <span> PROJECTS</span>
                </h2>
                <span className={style.titleBg}>WORKS</span>
            </div>
            <div className={`${containerStyle.container} ${style.flexStartContainer}`}>
                <div>
                    <ProjectsCard style={trello} address={''} title={'Trello'} description={'Trello helps bring all employees, tasks, and tools together in one place.'}/>
                </div>
                {/*<div>
                    <ProjectsCard style={cosmeticsStore} address={''} title={'Online cosmetics store'} description={'Online store of professional cosmetics.'}/>
                </div>*/}
            </div>
            <hr className={separatorStyle.separator}/>
        </div>
    );
};

export default Projects;