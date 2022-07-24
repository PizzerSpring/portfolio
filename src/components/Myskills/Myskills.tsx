import React from 'react';
import style from './Myskills.module.css';
import containerStyle from './../../commons/Container.module.css';
import SkillsCard from "./SkillsCard";

const Myskills = () => {
    return (
        <div className={style.mySkills}>
            <h2 className={style.title}>MY SKILLS</h2>
            <div className={containerStyle.container}>
                <div>
                    <SkillsCard count={'80%'} title={'HTML'}/>
                    <SkillsCard count={'60%'} title={'CSS'}/>
                </div>
                <div>
                    <SkillsCard count={'50%'} title={'JAVASCRIPT'}/>
                    <SkillsCard count={'70%'} title={'TYPESCRIPT'}/>
                </div>
                <div>
                    <SkillsCard count={'40%'} title={'REACT'}/>
                    <SkillsCard count={'20%'} title={'JQUERY'}/>
                </div>
                <div>
                    <SkillsCard count={'90%'} title={'REDUX'}/>
                    <SkillsCard count={'5%'} title={'PHP'}/>
                </div>
            </div>
        </div>
    );
};

export default Myskills;