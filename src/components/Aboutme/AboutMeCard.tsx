import React from 'react';
import style from './Aboutme.module.scss';

type AboutMeCardPropsType = {
    count: string
    descriptionTop: string
    descriptionBottom: string
}

const AboutMeCard = (props: AboutMeCardPropsType) => {
    return (
        <div className={style.card}>
            <h3 className={style.countValue}>{props.count}</h3>
            <p className={style.descriptionContainer}>
                {props.descriptionTop}
                <span className={style.description}>{props.descriptionBottom}</span>
            </p>
        </div>
    );
};

export default AboutMeCard;