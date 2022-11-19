import React from 'react';
import style from './Navigation.module.scss';
import homeIcon from '../../assets/images/main.png';
import aboutMeIcon from '../../assets/images/aboutme.png';
import portfolioIcon from '../../assets/images/portfolio.png';
import contactIcon from '../../assets/images/contact.png';


const Navigation = () => {
    const home = {
        backgroundImage: `url(${homeIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    const aboutMe = {
        backgroundImage: `url(${aboutMeIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    const portfolio = {
        backgroundImage: `url(${portfolioIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    const contact = {
        backgroundImage: `url(${contactIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    return (
        <nav className={style.navigation}>
            <ul>
                <li style={home} className={style.imgLinks}>
                    <a className={style.link} href="#home"></a>
                </li>
                <li style={aboutMe} className={style.imgLinks}>
                    <a className={style.link} href="#aboutMe"></a>
                </li>
                <li className={style.imgLinks}>
                    <a className={`${style.icon} ${style.link}`} href="#mySkills">S</a>
                </li>
                <li className={style.imgLinks}>
                    <a className={`${style.link} ${style.icon}`} href="#experience">E</a>
                </li>
                <li style={portfolio} className={style.imgLinks}>
                    <a className={style.link} href="#portfolio"></a>
                </li>
                <li style={contact} className={style.imgLinks}>
                    <a className={style.link} href="#footer"></a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;