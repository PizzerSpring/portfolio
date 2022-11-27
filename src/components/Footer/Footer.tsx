import React, {useState} from 'react';
import style from './Footer.module.scss';
import containerStyle from './../../commons/Container.module.css';
import telegramIcon from './../../assets/images/telegram.png';
import vkIcon from "../../assets/images/vk.png";
import twitterIcon from "../../assets/images/twitter.png";
import youtubeIcon from "../../assets/images/youtube.png";
import hhIcon from "../../assets/images/hhru.png";
import mailmeIcon from "../../assets/images/mailme.png";
import callmeIcon from "../../assets/images/callme.png";

const Footer = () => {
    const [isMessageActive, setIsMessageActive] = useState<boolean>(false);
    const telegram = {
        backgroundImage: `url(${telegramIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    const vk = {
        backgroundImage: `url(${vkIcon})`,
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
    const hh = {
        backgroundImage: `url(${hhIcon})`,
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
        <footer className={style.footer} id="footer">
            <div className={style.titleContainer}>
                <h2 className={style.title}>GET IN
                    <span> TOUCH</span>
                </h2>
                <span className={style.titleBg}>Contact</span>
            </div>
            <div className={style.descriptionForm}>
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
                            <li style={vk}>
                                <a href="https://vk.com/vladislav_guschin">
                                    <span></span>
                                </a>
                            </li>
                            <li style={twitter}>
                                <a href="#">
                                    <span></span>
                                </a>
                            </li>
                            <li style={youtube}>
                                <a href="https://www.youtube.com/">
                                    <span></span>
                                </a>
                            </li>
                            <li style={hh}>
                                <a href="https://novokuznetsk.hh.ru/resume/40f12a37ff08aedfb70039ed1f7852384d7733">
                                    <span></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.form}>
                    <form action="" onSubmit={(e) => {e.preventDefault()}}>
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
                            <button className={style.button} onClick={() => {
                                console.log(isMessageActive)
                                setIsMessageActive(true)}}>
                                <span className={style.buttonText}>send message</span>
                                <span className={style.buttonIcon} style={telegram}></span>
                            </button>
                        </div>
                        <div className={style.active}>
                            {isMessageActive ? <span className={style.outputMessage}>Message sent!</span> : ''}
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;