import React from 'react';
import style from './Aboutme.module.css';

type CardPropsType = {
    count: string
    description: string
}

const Card = (props: CardPropsType) => {
    return (
        <div className={style.card}>
            <span>{props.count}</span>
            <p>{props.description}</p>
        </div>
    );
};

export default Card;