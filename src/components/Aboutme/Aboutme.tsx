import React from 'react';
import style from './Aboutme.module.scss';
import containerStyle from './../../commons/Container.module.css';
import AboutMeCard from "./AboutMeCard";

const Aboutme = () => {
    return (
        <div className={style.aboutMe}>
            <div className={style.aboutMeTitle}>
                <h2 className={style.title}>ABOUT <span>ME</span></h2>
                <span className={style.titleBackground}>Resume</span>
            </div>
            <div className={`${containerStyle.container}`}>
                <div className={style.personalContainer}>
                    <div className={style.info}>
                        <h3 className={style.personalTitle}>PERSONAL INFO</h3>
                        <ul className={style.listUnstyled}>
                            <li><span className={style.titleInfo}>First Name : </span><span className={style.titleValueInfo}>Vladislav</span></li>
                            <li><span className={style.titleInfo}>Last Name : </span><span className={style.titleValueInfo}>Gushchin</span></li>
                            <li><span className={style.titleInfo}>Age : </span><span className={style.titleValueInfo}>26 Years</span></li>
                            <li><span className={style.titleInfo}>Nationality : </span><span className={style.titleValueInfo}>Russian</span></li>
                            <li><span className={style.titleInfo}>Freelance : </span><span className={style.titleValueInfo}>Accessible</span></li>
                        </ul>
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