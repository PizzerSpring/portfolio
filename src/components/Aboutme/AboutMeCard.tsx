import React from 'react';
import style from './Aboutme.module.css';

type AboutMeCardPropsType = {
    count: string
    description: string
}

const AboutMeCard = (props: AboutMeCardPropsType) => {
    return (
        <div className={style.card}>
            <span>{props.count}</span>
            <p>{props.description}</p>
        </div>
    );
};

export default AboutMeCard;