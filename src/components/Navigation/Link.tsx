import React from 'react';
import style from "./Navigation.module.scss";

type LinkPropsType = {
    style: {}
    isMenu: boolean
    setMenu: (isMenu: boolean) => void
    linkText: string
    linkA: string
}

const Link = (props: LinkPropsType) => {
    return (
        <>
            <li><span className={style.iconLink} style={props.style}></span><a onClick={() => props.setMenu(!props.isMenu)} className={style.menuItem} href={props.linkA}>{props.linkText}</a></li>
        </>
    );
};

export default Link;