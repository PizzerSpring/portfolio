import React from 'react';
import style from './Footer.module.scss';
import containerStyle from './../../commons/Container.module.css';
import telegramIcon from './../../assets/images/telegram.png';
import facebookIcon from "../../assets/images/facebook.png";
import twitterIcon from "../../assets/images/twitter.png";
import youtubeIcon from "../../assets/images/youtube.png";
import pinterestIcon from "../../assets/images/pinterest.png";
import mailmeIcon from "../../assets/images/mailme.png";
import callmeIcon from "../../assets/images/callme.png";

const Footer = () => {
    const telegram = {
        backgroundImage: `url(${telegramIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    const facebook = {
        backgroundImage: `url(${facebookIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    const twitter = {
        backgroundImage: `url(${twitterIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    const youtube = {
        backgroundImage: `url(${youtubeIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    const pinterest = {
        backgroundImage: `url(${pinterestIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    const mailMe = {
        backgroundImage: `url(${mailmeIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    const callMe = {
        backgroundImage: `url(${callmeIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    return (
        <footer className={style.footer}>
            <div className={style.titleContainer}>
                <h2 className={style.title}>GET IN
                    <span> TOUCH</span>
                </h2>
                <span className={style.titleBg}>Contact</span>
            </div>
            <div className={`${containerStyle.container} ${style.descriptionForm}`}>
                <div>
                    <h3 className={style.textTitle}>DON'T BE SHY !</h3>
                    <p className={style.text}>
                        Feel free to get in touch with me. I am always open to discussing new projects, creative
                        ideas or opportunities to be part of your visions.
                    </p>
                    <p className={style.yellowIconsContainer}>
                        <p style={mailMe} className={style.yellowIcons}></p>
                        <p>
                            <p>MAIL ME</p>
                            <span>vladislav9646@gmail.com</span>
                        </p>
                    </p>
                    <p className={style.yellowIconsContainer}>
                        <p style={callMe} className={style.yellowIcons}></p>
                        <p>
                            <p> CALL ME</p>
                            <span> +7 961 860 05 12</span>
                        </p>
                    </p>
                    <div className={style.socialIconsContainer}>
                        <ul>
                            <li style={facebook}>
                                <a href="">
                                    <span></span>
                                </a>
                            </li>
                            <li style={twitter}>
                                <a href="">
                                    <span></span>
                                </a>
                            </li>
                            <li style={youtube}>
                                <a href="">
                                    <span></span>
                                </a>
                            </li>
                            <li style={pinterest}>
                                <a href="">
                                    <span></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.form}>
                    <form action="">
                        <div className={style.inputsContainer}>
                            <div className={style.elementInput}>
                                <input className={style.input} placeholder='YOUR NAME' type="text"/>
                            </div>
                            <div className={style.elementInput}>
                                <input className={style.input} placeholder='YOUR EMAIL' type="email"/>
                            </div>
                            <div className={style.elementInput}>
                                <input className={style.input} placeholder='YOUR SUBJECT' type="text"/>
                            </div>
                        </div>
                        <div>
                            <textarea placeholder='YOUR MESSAGE' name="" id="" className={style.textarea}></textarea>
                            <button className={style.button}>
                                <span className={style.buttonText}>send message</span>
                                <span className={style.buttonIcon} style={telegram}></span>
                            </button>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;