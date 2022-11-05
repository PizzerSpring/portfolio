import React from 'react';
import style from './Experience.module.scss';
import bgIconJs from './../../assets/images/js.png';

type ExperienceCardPropsType = {
    story: string
    title: string
    description: string
    theme: string
    style: {}
}

const ExperienceCard = (props: ExperienceCardPropsType) => {

    return (
        <div className={style.education}>
            <div className={style.icon}>
                <span style={props.style} className={style.fa}>
                </span>
            </div>
            <span className={style.time}>{props.story}</span>
            <h5 className={style.resumeBox}>
                {props.title}
                <span className={style.place}>
                    {props.theme}
                </span>
            </h5>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};

export default ExperienceCard;