import React from 'react'
import rasm from "../asset/logo.svg"
import "../Header/Header.scss"
import iconsUser from "../asset/iconsUser.svg"
import Cart from "../asset/Cart.svg"


const Header = () => {
    return (
        <div className="Header">
        <div className="container">
            <div className="header__wrapper">
                <div className='header__logo'>
                    <img src={rasm} alt="" />
                </div>
                <div className='header__content'>
                    <ul className='Header__collection'>
                        <li className='Header__item'>
                            <select name="select" id="">
                                <option className='option' value="">Discovery</option>
                                <option className='option' value="">Made</option>
                            </select>
                        </li>
                        <li className='Header__item'>About</li>
                        <li  className='Header__item'>Contact us</li>
                    </ul>
                </div>
                <div className='header__item'>
                    <img src={iconsUser} alt="" />
                    <img src={Cart} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header