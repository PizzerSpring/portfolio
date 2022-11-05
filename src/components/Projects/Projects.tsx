import React from 'react';
import style from './Projects.module.scss';
import containerStyle from './../../commons/Container.module.css';
import ProjectsCard from "./ProjectsCard";
import trelloImage from './../../assets/images/trello.png';
import cosmeticsStoreImage from './../../assets/images/cosmeticsstore.png';

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
        <div className={style.projects}>
            <div className={style.titleContainer}>
                <h2 className={style.title}>
                    MY
                    <span> PROJECTS</span>
                </h2>
                <span className={style.titleBg}>WORKS</span>
            </div>
            <div className={containerStyle.container}>
                <div>
                    <ProjectsCard style={trello} address={''} title={'Online cosmetics store'} description={'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,'}/>
                    <ProjectsCard style={cosmeticsStore} address={''} title={'Trello analogue'} description={'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,'}/>
                </div>
                <div>
                    <ProjectsCard style={trello} address={''} title={'Online cosmetics store'} description={'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,'}/>
                    <ProjectsCard style={cosmeticsStore} address={''} title={'Trello analogue'} description={'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,'}/>
                </div>
                <div>
                    <ProjectsCard style={trello} address={''} title={'Online cosmetics store'} description={'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,'}/>
                    <ProjectsCard style={cosmeticsStore} address={''} title={'Trello analogue'} description={'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;