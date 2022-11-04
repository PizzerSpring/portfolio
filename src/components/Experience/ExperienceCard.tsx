import React from 'react';
import style from './Experience.module.scss';
import bgIconJs from './../../assets/images/js.png';

type ExperienceCardPropsType = {
    story: string
    title: string
    description: string
    theme: string
}

const ExperienceCard = (props: ExperienceCardPropsType) => {

    const styleIcon = {
        backgroundImage: `url(${bgIconJs})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '16px',
        height: '16px',
    }

    return (
        <div className={style.education}>
            <div className={style.icon}>
                <span style={styleIcon} className={style.fa}>
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