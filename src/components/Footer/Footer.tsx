import React from 'react';
import style from './Footer.module.css';
import containerStyle from './../../commons/Container.module.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.titleContainer}>
                <h2 className={style.title}>GET IN
                    <span> TOUCH</span>
                </h2>
                <span className={style.titleBg}>Contact</span>
            </div>
            <div className={containerStyle.container}>
                <div>
                    <h3 className={style.textTitle}>DON'T BE SHY !</h3>
                    <p className={style.text}>
                        Feel free to get in touch with me. I am always<br/> open to discussing new projects, creative
                        ideas or<br/> opportunities to be part of your visions.
                    </p>
                    <p className={style.yellowIconsContainer}>
                        <p className={style.yellowIcons}></p>
                        <p>
                            <p>MAIL ME</p>
                            <span>vladislav9646@gmail.com</span>
                        </p>
                    </p>
                    <p className={style.yellowIconsContainer}>
                        <p className={style.yellowIcons}></p>
                        <p>
                            <p> CALL ME</p>
                            <span> +7 961 860 05 12</span>
                        </p>
                    </p>
                    <div className={style.socialIconsContainer}>
                        <ul>
                            <li>
                                <a href="">
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span></span>
                                </a>
                            </li>
                            <li>
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
                                <span className={style.buttonIcon}></span>
                            </button>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;