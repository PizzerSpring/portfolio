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
                    <ExperienceCard story={'2020'} title={'WEB DEVELOPER '} description={`I received a certificate of completion of the itgid.info course in Javascript. I also read a lot about it on learnjavascript.`} theme={'Javascript'}/>
                    <ExperienceCard story={'2020 - 2021'} title={'WEB DEVELOPER '} description={`I studied HTML CSS, then got acquainted with preprocessors. For example SASS. Tried to make up different layouts from the Internet.`} theme={'Layout'}/>
                    <ExperienceCard story={'2021 - 2022'} title={'WEB DEVELOPER '} description={`I took interactive courses at HTMLAcademy, watched videos about layout, about certain topics on Javascript, which seemed difficult to me.`} theme={'HTMLAcademy.ru'}/>
                </div>
                <div>
                    <ExperienceCard story={'2022'} title={'REACT DEVELOPER '} description={`I found it.incubator.io courses on react , which revealed not only the features of this framework, but also the architectural principles of building applications.`} theme={'React'}/>
                    <ExperienceCard story={'2022'} title={'REACT DEVELOPER '} description={`Then I made an adaptive landing page and added two of my projects there. Trello analogue and unfinished online cosmetics store. I do all projects with Typescript.`} theme={'Projects'}/>
                    <ExperienceCard story={'2022'} title={'REACT DEVELOPER '} description={`I'm also learning how Redux works. And I try to introduce modern libraries into projects. For example "formic".`} theme={'Redux'}/>
                </div>
            </div>
        </div>
    );
};

export default Experience;