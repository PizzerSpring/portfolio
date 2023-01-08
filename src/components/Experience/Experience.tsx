import React from 'react';
import style from './Experience.module.scss';
import containerStyle from './../../commons/Container.module.css';
import ExperienceCard from "./ExperienceCard";
import bgIconJS from './../../assets/images/js.png';
import bgIconCSS from './../../assets/images/css.png';
import bgIconHTML from './../../assets/images/html.png';
import bgIconReact from './../../assets/images/reactjs.png';
import bgIconTS from './../../assets/images/typescript.png';
import bgIconRedux from './../../assets/images/redux.png';
import separatorStyle from "../../commons/Separator.module.scss";

const Experience = () => {

    const styleIconJS = {
        backgroundImage: `url(${bgIconJS})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '16px',
        height: '16px',
    }
    const styleIconCss = {
        backgroundImage: `url(${bgIconCSS})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '16px',
        height: '16px',
    }
    const styleIconHtml= {
        backgroundImage: `url(${bgIconHTML})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '16px',
        height: '16px',
    }
    const styleIconReact = {
        backgroundImage: `url(${bgIconReact})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '16px',
        height: '16px',
    }
    const styleIconTS = {
        backgroundImage: `url(${bgIconTS})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '16px',
        height: '16px',
    }
    const styleIconRedux = {
        backgroundImage: `url(${bgIconRedux})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '16px',
        height: '16px',
    }

    return (
        <div className={style.experience} id="experience">
            <h3 className={style.title}>EXPERIENCE <span>&</span> EDUCATION</h3>
            <div className={containerStyle.container}>
                <div>
                    <ExperienceCard style={styleIconJS} story={'2020'} title={'WEB DEVELOPER '} description={`I received a certificate of completion of the itgid.info course in Javascript. I also read a lot about it on learnjavascript.`} theme={'Javascript'}/>
                    <ExperienceCard style={styleIconCss} story={'2020 - 2021'} title={'WEB DEVELOPER '} description={`I studied HTML CSS, then got acquainted with preprocessors. For example SASS. Tried to make up different layouts from the Internet.`} theme={'Layout'}/>
                    <ExperienceCard style={styleIconHtml} story={'2021 - 2022'} title={'WEB DEVELOPER '} description={`I took interactive courses at HTMLAcademy, watched videos about layout, about certain topics on Javascript, which seemed difficult to me.`} theme={'HTMLAcademy.ru'}/>
                </div>
                <div>
                    <ExperienceCard style={styleIconReact} story={'2022'} title={'REACT DEVELOPER '} description={`I found it.incubator.io courses on react , which revealed not only the features of this framework, but also the architectural principles of building applications.`} theme={'React'}/>
                    <ExperienceCard style={styleIconTS} story={'2022'} title={'REACT DEVELOPER '} description={`Then I made an adaptive landing page, in which I will add my projects later. For now it's just pictures.`} theme={'Projects'}/>
                    <ExperienceCard style={styleIconRedux} story={'2022'} title={'REACT DEVELOPER '} description={`I'm also learning how Redux works. And I try to introduce modern libraries into projects. For example "formic".`} theme={'Redux'}/>
                </div>
            </div>
            <hr className={separatorStyle.separator}/>
        </div>
    );
};

export default Experience;