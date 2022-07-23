import React from 'react';
import style from './Header.module.css';
import Main from "../Main/Main";

const Header = () => {
    return (
        <header className={style.header}>
            <Main/>
        </header>
    );
};

export default Header;