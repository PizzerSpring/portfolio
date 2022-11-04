import React from 'react';
import style from './Experience.module.css';
import containerStyle from './../../commons/Container.module.css';
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    return (
        <div className={style.experience}>
            <h3 className={style.title}>EXPERIENCE <span>&</span> EDUCATION</h3>
            <div className={containerStyle.container}>
                <div>
                    <ExperienceCard story={'2018 - PRESENT'} title={'WEB DEVELOPER '} description={`Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,`}/>
                    <ExperienceCard story={'2018 - PRESENT'} title={'WEB DEVELOPER '} description={`Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,`}/>
                    <ExperienceCard story={'2018 - PRESENT'} title={'WEB DEVELOPER '} description={`Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,`}/>
                </div>
                <div>
                    <ExperienceCard story={'2018 - PRESENT'} title={'WEB DEVELOPER '} description={`Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,`}/>
                    <ExperienceCard story={'2018 - PRESENT'} title={'WEB DEVELOPER '} description={`Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,`}/>
                    <ExperienceCard story={'2018 - PRESENT'} title={'WEB DEVELOPER '} description={`Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,`}/>
                </div>
            </div>
        </div>
    );
};

export default Experience;