import React from 'react';
import style from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={style.nav}>
            <div className={style.navImg}></div>
            <div className={style.navImg}></div>
            <div className={style.navImg}></div>
            <div className={style.navImg}></div>
            <div className={style.navImg}></div>
        </div>
    );
};

export default Navigation;