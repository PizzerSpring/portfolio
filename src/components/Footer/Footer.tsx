import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <h4 className={style.footerH4}>GET IN TOUCH</h4>
            <div className={style.footercontainer}>
                <div>
                    <h5>DON'T BE SHY !</h5>
                    <p className={style.footertext}>
                        Feel free to get in touch with me. I am always<br/> open to discussing new projects, creative ideas or<br/> opportunities to be part of your visions.
                    </p>
                    <div className={style.footeryellowiconscontainer}>
                        <div className={style.footeryellowicons}></div>
                        <div>
                            <p>MAIL ME</p>
                            <span>vladislav9646@gmail.com</span>
                        </div>
                    </div>
                    <div className={style.footeryellowiconscontainer}>
                        <div className={style.footeryellowicons}></div>
                        <div>
                            <p>CALL ME</p>
                            <span>+7 961 860 05 12</span>
                        </div>
                    </div>
                    <div className={style.footersocialiconscontainer}>
                        <div className={style.footersocialicons}></div>
                        <div className={style.footersocialicons}></div>
                        <div className={style.footersocialicons}></div>
                        <div className={style.footersocialicons}></div>
                    </div>
                </div>
                <div className={style.footerform}>
                    <form action="">
                        <div className={style.footerinputscontainer}>
                            <input className={style.footerinputs} placeholder='YOUR NAME' type="text"/>
                            <input placeholder='YOUR EMAIL' type="email"/>
                            <input placeholder='YOUR SUBJECT' type="text"/>
                        </div>
                        <div>
                            <textarea placeholder='YOUR MESSAGE' name="" id="" className={style.footerinputtextarea}></textarea>
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