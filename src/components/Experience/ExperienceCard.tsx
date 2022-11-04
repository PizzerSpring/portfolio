import React from 'react';
import style from './Experience.module.css';

type ExperienceCardPropsType = {
    story: string
    title: string
    description: string
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
                    ENVATO
                </span>
            </h5>
            <p className={style.description}>{props.description}</p>

            {/*<p>{props.story}</p>
            <h3>{props.title}</h3>
            <p>{props.description}</p>*/}
        </div>
    );
};

export default ExperienceCard;