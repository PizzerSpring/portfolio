import React, {useState} from 'react';
import style from './Navigation.module.scss';
import homeIcon from '../../assets/images/main.png';
import aboutMeIcon from '../../assets/images/aboutme.png';
import portfolioIcon from '../../assets/images/portfolio.png';
import contactIcon from '../../assets/images/contact.png';
import expIcon from '../../assets/images/exp.png';
import Link from "./Link";


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
    const exp = {
        backgroundImage: `url(${expIcon})`,
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
                    <button className={`${style.menuBtn} ${isMenu ? style.menuBtnActive : ''}`} onClick={() =>  {setMenu(!isMenu)}}><span></span></button>
                    <ul className={`${style.menuBox} ${isMenu ? style.menuActive : ''}`}>
                        <Link style={home} isMenu={isMenu} setMenu={setMenu} linkText={'Home'} linkA={'#home'}/>
                        <hr className={style.separator}/>
                        <Link style={aboutMe} isMenu={isMenu} setMenu={setMenu} linkText={'About me'} linkA={'#aboutMe'}/>
                        <hr className={style.separator}/>
                        <Link style={exp} isMenu={isMenu} setMenu={setMenu} linkText={'My skills'} linkA={'#mySkills'}/>
                        <hr className={style.separator}/>
                        <Link style={exp} isMenu={isMenu} setMenu={setMenu} linkText={'Experience'} linkA={'#experience'}/>
                        <hr className={style.separator}/>
                        <Link style={portfolio} isMenu={isMenu} setMenu={setMenu} linkText={'Portfolio'} linkA={'#portfolio'}/>
                        <hr className={style.separator}/>
                        <Link style={contact} isMenu={isMenu} setMenu={setMenu} linkText={'Get in touch'} linkA={'#footer'}/>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Navigation;