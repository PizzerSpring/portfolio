import React from 'react';
import style from './Myskills.module.scss';

type SkillsCardPropsType = {
    count: string
    title: string
}

const SkillsCard = (props: SkillsCardPropsType) => {
    return (
        <div className={style.skillCard}>
            <div className={style.skills}>
                <span className={style.skillsLevel}>{props.count}</span>
                <div className={style.slice}>
                    <div className={style.bar}></div>
                    <div className={style.fill}></div>
                </div>
            </div>
            <h6 className={style.skillTitle}>{props.title}</h6>
        </div>

    );
};

export default SkillsCard;