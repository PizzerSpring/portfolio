import React from 'react';
import style from './Myskills.module.css'

const Myskills = () => {
    return (
        <div className={style.myskills}>
            <h3 className={style.myskillsH3}>MY SKILLS</h3>
            <div className={style.myskillscontainer}>
                <div>
                    <div className={style.myskillsskills}>
                        <div className={style.myskillslevel}>80%</div>
                        <div>HTML</div>
                    </div>
                    <div className={style.myskillsskills}>
                        <div className={style.myskillslevel}>60%</div>
                        <div>CSS</div>
                    </div>
                </div>
                <div>
                    <div className={style.myskillsskills}>
                        <div className={style.myskillslevel}>50%</div>
                        <div>JAVASCRIPT</div>
                    </div>
                    <div className={style.myskillsskills}>
                        <div className={style.myskillslevel}>70%</div>
                        <div>TYPESCRIPT</div>
                    </div>
                </div>
                <div>
                    <div className={style.myskillsskills}>
                        <div className={style.myskillslevel}>40%</div>
                        <div>REACT</div>
                    </div>
                    <div className={style.myskillsskills}>
                        <div className={style.myskillslevel}>20%</div>
                        <div>JQUERY</div>
                    </div>
                </div>
                <div>
                    <div className={style.myskillsskills}>
                        <div className={style.myskillslevel}>90%</div>
                        <div>REDUX</div>
                    </div>
                    <div  className={style.myskillsskills}>
                        <div className={style.myskillslevel}>5%</div>
                        <div>PHP</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myskills;