import React from 'react';
import style from './Myskills.module.css';

type SkillsCardPropsType = {
    count: string
    title: string
}

const SkillsCard = (props: SkillsCardPropsType) => {
    return (
        <div className={style.skills}>
            <span className={style.skillsLevel}>{props.count}</span>
            <p>{props.title}</p>
        </div>
    );
};

export default SkillsCard;