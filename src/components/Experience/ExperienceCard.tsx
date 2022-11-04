import React from 'react';
import style from './Experience.module.css';

type ExperienceCardPropsType = {
    story: string
    title: string
    description: string
    theme: string
}

const ExperienceCard = (props: ExperienceCardPropsType) => {
    return (
        <div className={style.education}>
            <div className={style.icon}>
                <span className={style.fa}>
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