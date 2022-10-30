import React from 'react';
import style from './Main.module.scss';
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
                    <p className={style.description}>I am a front-end developer from Novokuznetsk, specializing in
                        creating an interface for user interaction. I am using the react framework. I'm passionate about
                        creating
                        great software that will improve the lives of those around you.</p>
                    <a className={style.buttonAboutMe} href="">
                        <span className={style.buttonAboutMeText}>MORE ABOUT ME</span>
                        <span className={style.buttonAboutMeIcon}>
                          <span className={style.longArrow}></span>
                          <span className={style.longArrowT}></span>
                          <span className={style.longArrowB}></span>
                        </span>
                    </a>
                </div>
                <Navigation/>
            </div>
        </main>
    );
};

export default Main;