import React from 'react';
import style from './Main.module.css';
import Navigation from "../Navigation/Navigation";

const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.mainAvatar}></div>
            <div className={style.mainText}>
                <h1>- I'M VLADISLAV GUSHCHIN<br/>
                    REACT DEVELOPER
                </h1>
                <p className={style.mainTextP}>I'm a Tunisian based web designer & front‑end developer focused on<br/> crafting clean & user‑friendly experiences, I am passionate about building<br/> excellent software that improves the lives of those around me.</p>
                <a href="">MORE ABOUT ME</a>
            </div>
            <Navigation/>
        </div>
    );
};

export default Main;