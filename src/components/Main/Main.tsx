import React from 'react';
import style from './Main.module.css';
import Navigation from "../Navigation/Navigation";

const Main = () => {
    return (
        <main className={style.mainContainer}>
            <div className={style.photo}></div>
            <div className={style.text}>
                <h1>- I'M VLADISLAV GUSHCHIN<br/>
                    REACT DEVELOPER
                </h1>
                <p className={style.description}>I'm a Tunisian based web designer & front‑end developer focused on<br/> crafting clean & user‑friendly experiences, I am passionate about building<br/> excellent software that improves the lives of those around me.</p>
                <a href="">MORE ABOUT ME</a>
            </div>
            <Navigation/>
        </main>
    );
};

export default Main;