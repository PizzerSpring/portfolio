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
            <p>{props.story}</p>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default ExperienceCard;