import React, {useState} from 'react';
import style from './Myskills.module.scss';

type SkillsCardPropsType = {
    count: string
    title: string
}

const SkillsCard = (props: SkillsCardPropsType) => {
    const pct = ((100 - +props.count) / 100) * Math.PI * (90 * 2);
    const styleStrokeDashoffset = {
        strokeDashoffset: `${pct}`
    }


    return (
        <div className={style.skillCard}>
            <div className={style.cont} data-pct={props.count}>
                <svg className={style.svg} width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle style={styleStrokeDashoffset} r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48"
                            stroke-dashoffset="0"></circle>
                    <circle style={styleStrokeDashoffset} className={style.bar} r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48"
                            stroke-dashoffset="0"></circle>
                </svg>
            </div>
            <h6 className={style.skillTitle}>{props.title}</h6>
        </div>

    );
};

export default SkillsCard;