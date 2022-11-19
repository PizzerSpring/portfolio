import React from 'react';
import style from './Main.module.scss';
import Navigation from "../Navigation/Navigation";
import arrowIcon from "./../../assets/images/arrowHome.png";

const Main = () => {
    const arrow = {
        backgroundImage: `url(${arrowIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    return (
        <main className={style.mainContainer} id="home">
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
                        <span style={arrow} className={style.buttonAboutMeIcon}>
                        </span>
                    </a>
                </div>
                <Navigation/>
            </div>
        </main>

    );
};

export default Main;