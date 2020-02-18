import React from "react";

function Header(props) {
    return (
        <div className="header">
            <div className="container header__container">
                <div className="logo"/>
                <ul className="menu">
                    <li className="menu__item is-active">Product</li>
                    <li className="menu__item">How it works</li>
                    <li className="menu__item">Features</li>
                    <li className="menu__item">Contact</li>
                </ul>
                {props.button}
            </div>
        </div>
    )
}

export default Header;
