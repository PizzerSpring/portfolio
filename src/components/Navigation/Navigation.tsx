import React from 'react';
import style from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={style.navigation}>
            <div className={style.imgLinks}></div>
            <div className={style.imgLinks}></div>
            <div className={style.imgLinks}></div>
            <div className={style.imgLinks}></div>
            <div className={style.imgLinks}></div>
            <div className={style.imgLinks}></div>
        </nav>
    );
};

export default Navigation;