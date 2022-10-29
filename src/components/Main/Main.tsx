import React from 'react';
import style from './Main.module.css';
import Navigation from "../Navigation/Navigation";

const Main = () => {
    return (
        <main className={style.mainContainer}>
            <div className={style.frame}></div>
            <div className={style.textPhoto}>
                <div className={style.photo}></div>
                <div className={style.text}>
                    <h1 className={style.mainTitle}>I'M VLADISLAV GUSHCHIN
                        <span>REACT DEVELOPER</span>
                    </h1>
                    <p className={style.description}>I'm a Tunisian based web designer & front‑end developer focused on<br/> crafting clean & user‑friendly experiences, I am passionate about building<br/> excellent software that improves the lives of those around me.</p>
                    <a className={style.buttonAboutMe} href="">
                        <span className={style.buttonAboutMeText}>MORE ABOUT ME</span>
                        <span className={style.buttonAboutMeIcon}>
                        <span className={style.longArrow}></span>
                        <span className={style.longArrowT}></span>
                        <span className={style.longArrowB}></span>
                    </span>
                    </a>
                </div>
            </div>
            {/*<Navigation/>*/}
        </main>
    );
};

export default Main;