import React, {useState} from 'react';
import style from './Navigation.module.scss';
import homeIcon from '../../assets/images/main.png';
import aboutMeIcon from '../../assets/images/aboutme.png';
import portfolioIcon from '../../assets/images/portfolio.png';
import contactIcon from '../../assets/images/contact.png';
import {isVisible} from "@testing-library/user-event/dist/utils";


const Navigation = () => {
    const [isMenu, setMenu] = useState<boolean>(false)
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
        <>
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

            <div>
                <div className={style.hamburgerMenu}>
                    {/*<input id="menu__toggle" className={style.menuToggle} type="checkbox"/>
                    <label className={style.menuBtn} htmlFor="menu__toggle">
                        <span></span>
                    </label>*/}
                    <button className={`${style.menuBtn} ${isMenu ? style.menuBtnActive : ''}`} onClick={() =>  {
                        console.log(isMenu)
                        setMenu(!isMenu)}}><span></span></button>
                    <ul className={`${style.menuBox} ${isMenu ? style.menuActive : ''}`}>
                        <li><a className={style.menuItem} href="#home">Home</a></li>
                        <hr className={style.separator}/>
                        <li><a onClick={() => setMenu(!isMenu)} className={style.menuItem} href="#aboutMe">About me</a></li>
                        <hr className={style.separator}/>
                        <li><a className={style.menuItem} href="#mySkills">My skills</a></li>
                        <hr className={style.separator}/>
                        <li><a className={style.menuItem} href="#experience">Experience</a></li>
                        <hr className={style.separator}/>
                        <li><a className={style.menuItem} href="#portfolio">Portfolio</a></li>
                        <hr className={style.separator}/>
                        <li><a className={style.menuItem} href="#footer">Get in touch</a></li>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Navigation;