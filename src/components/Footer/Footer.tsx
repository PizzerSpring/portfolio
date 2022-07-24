import React from 'react';
import style from './Footer.module.css';
import containerStyle from './../../commons/Container.module.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <h2 className={style.title}>GET IN TOUCH</h2>
            <div className={containerStyle.container}>
                <div>
                    <h3 className={style.textTitle}>DON'T BE SHY !</h3>
                    <p className={style.text}>
                        Feel free to get in touch with me. I am always<br/> open to discussing new projects, creative ideas or<br/> opportunities to be part of your visions.
                    </p>
                    <div className={style.yellowIconsContainer}>
                        <div className={style.yellowIcons}></div>
                        <div>
                            <p>MAIL ME</p>
                            <span>vladislav9646@gmail.com</span>
                        </div>
                    </div>
                    <div className={style.yellowIconsContainer}>
                        <div className={style.yellowIcons}></div>
                        <div>
                            <p>CALL ME</p>
                            <span>+7 961 860 05 12</span>
                        </div>
                    </div>
                    <div className={style.socialIconsContainer}>
                        <div className={style.socialIcons}></div>
                        <div className={style.socialIcons}></div>
                        <div className={style.socialIcons}></div>
                        <div className={style.socialIcons}></div>
                    </div>
                </div>
                <div className={style.form}>
                    <form action="">
                        <div className={style.inputsContainer}>
                            <input className={style.input} placeholder='YOUR NAME' type="text"/>
                            <input placeholder='YOUR EMAIL' type="email"/>
                            <input placeholder='YOUR SUBJECT' type="text"/>
                        </div>
                        <div>
                            <textarea placeholder='YOUR MESSAGE' name="" id="" className={style.textarea}></textarea>
                        </div>
                        <div>
                            <a href="">SEND MESSAGE</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;