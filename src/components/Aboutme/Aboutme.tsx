import React from 'react';
import style from './Aboutme.module.css';
import containerStyle from './../../commons/Container.module.css';
import AboutMeCard from "./AboutMeCard";

const Aboutme = () => {
    return (
        <div className={style.aboutMe}>
            <h2 className={style.title}>ABOUT ME</h2>
            <div className={`${containerStyle.container}`}>
                <div className={style.personalContainer}>
                    <div className={style.info}>
                        <h3>PERSONAL INFO</h3>
                        <p><span>First Name: </span>Vladislav</p>
                        <p><span>Last Name: </span>Gushchin</p>
                        <p><span>Age: </span>26 Years</p>
                        <p><span>Nationality: </span>Russian</p>
                        <p><span>Freelance: </span>Accessible</p>
                        <div><a href="">DOWNLOAD CV</a></div>
                    </div>
                    <div className={`${style.info} ${style.exactInfo}`}>
                        <p><span>Address: </span>Novokuznetsk</p>
                        <p><span>Phone: </span>+7-961-860-05-12</p>
                        <p><span>Email: </span>vladislav9646@gmail.com</p>
                        <p><span>Telegram: </span>@PizzerSpring</p>
                        <p><span>Languages: </span>Russian</p>
                    </div>
                </div>
                <div className={style.workContainer}>
                    <div>
                        <AboutMeCard count={'12+'} description={'YEARS OF EXPERIENCE'}/>
                        <AboutMeCard count={'22+'} description={'HAPPY CUSTOMERS'}/>
                    </div>
                    <div>
                        <AboutMeCard count={'6+'} description={'COMPLETED PROJECTS'}/>
                        <AboutMeCard count={'45+'} description={'AWARDS WON'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;