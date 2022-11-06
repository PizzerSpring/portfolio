import React from 'react';
import style from './Aboutme.module.scss';
import containerStyle from './../../commons/Container.module.css';
import AboutMeCard from "./AboutMeCard";
import downloadIcon from '../../assets/images/download.png';
import arrowIcon from "../../assets/images/arrowHome.png";

const Aboutme = () => {
    const download = {
        backgroundImage: `url(${downloadIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
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
                            <li><span className={style.titleInfo}>First Name : </span><span
                                className={style.titleValueInfo}>Vladislav</span></li>
                            <li><span className={style.titleInfo}>Last Name : </span><span
                                className={style.titleValueInfo}>Gushchin</span></li>
                            <li><span className={style.titleInfo}>Age : </span><span className={style.titleValueInfo}>26 Years</span>
                            </li>
                            <li><span className={style.titleInfo}>Nationality : </span><span
                                className={style.titleValueInfo}>Russian</span></li>
                            <li><span className={style.titleInfo}>Freelance : </span><span
                                className={style.titleValueInfo}>Accessible</span></li>
                        </ul>
                    </div>
                    <div className={`${style.info} ${style.exactInfo}`}>
                        <ul className={style.listUnstyled}>
                            <li>
                                <span className={style.titleInfo}>Address : </span>
                                <span className={style.titleValueInfo}>Novokuznetsk</span>
                            </li>
                            <li>
                                <span className={style.titleInfo}>Phone : </span>
                                <span className={style.titleValueInfo}>+7-961-860-05-12</span>
                            </li>
                            <li>
                                <span className={style.titleInfo}>Email : </span>
                                <span className={style.titleValueInfo}>vladislav9646@gmail.com</span>
                            </li>
                            <li>
                                <span className={style.titleInfo}>Telegram : </span>
                                <span className={style.titleValueInfo}>@PizzerSpring</span>
                            </li>
                            <li>
                                <span className={style.titleInfo}>Languages : </span>
                                <span className={style.titleValueInfo}>Russian</span>
                            </li>
                        </ul>
                    </div>
                    <div className={style.buttonContainer}>
                        <a href="" className={style.button}>
                            <span className={style.buttonText}>Download cv</span>
                            <span className={style.buttonIcon} style={download}>
                            </span>
                        </a>
                    </div>
                </div>
                <div className={style.workContainer}>
                    <div>
                        <AboutMeCard count={'1'} descriptionTop={'YEAR OF'} descriptionBottom={'EXPERIENCE'}/>
                        <AboutMeCard count={'2'} descriptionTop={'HAPPY'} descriptionBottom={'CUSTOMERS'}/>
                    </div>
                    <div>
                        <AboutMeCard count={'2'} descriptionTop={'COMPLETED'} descriptionBottom={'PROJECTS'}/>
                        <AboutMeCard count={'0'} descriptionTop={'AWARDS'} descriptionBottom={'WON'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;