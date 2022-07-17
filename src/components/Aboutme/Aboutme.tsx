import React from 'react';
import style from './Aboutme.module.css'

const Aboutme = () => {
    return (
        <div className={style.aboutme}>
            <h2 className={style.aboutmeH2}>ABOUT ME</h2>
            <div className={style.aboutmecontainer}>

                    <div className={style.aboutmePersonalcontainer}>
                        <div className={style.aboutmepersonalinfo}>
                            <h3>PERSONAL INFO</h3>
                            <p><span>First Name: </span>Vladislav</p>
                            <p><span>Last Name: </span>Gushchin</p>
                            <p><span>Age: </span>26 Years</p>
                            <p><span>Nationality: </span>Russian</p>
                            <p><span>Freelance: </span>Accessible</p>
                            <div><a href="">DOWNLOAD CV</a></div>
                        </div>
                        <div className={`${style.aboutmepersonalinfo} ${style.aboutmepersonalinfotwo}`}>
                            <p><span>Address: </span>Novokuznetsk</p>
                            <p><span>Phone: </span>+7-961-860-05-12</p>
                            <p><span>Email: </span>vladislav9646@gmail.com</p>
                            <p><span>Telegram: </span>@PizzerSpring</p>
                            <p><span>Languages: </span>Russian</p>
                        </div>
                    </div>

                <div className={style.aboutmeworkcontainer}>
                    <div>
                        <div className={style.aboutmeworkcard}>
                            <span>12+</span>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <div className={style.aboutmeworkcard}>
                            <span>22+</span>
                            <p>HAPPY CUSTOMERS</p>
                        </div>
                    </div>
                    <div>
                        <div className={style.aboutmeworkcard}>
                            <span>6+</span>
                            <p>COMPLETED PROJECTS</p>
                        </div>
                        <div className={style.aboutmeworkcard}>
                            <span>45+</span>
                            <p>AWARDS WON</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;