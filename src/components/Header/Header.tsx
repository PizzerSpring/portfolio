import React from 'react';
import style from './Header.module.css';
import Main from "../Main/Main";

const Header = () => {
    return (
        <div className={style.header}>
            <Main/>
        </div>
    );
};

export default Header;