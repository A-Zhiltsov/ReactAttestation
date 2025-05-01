import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/Styles.css';
import logo from '../../assets/img/logo.png';
import search from '../../assets/img/search.svg';
import menu from '../../assets/img/menu.svg';
import reg from '../../assets/img/reg.svg';
import cart from '../../assets/img/cart.svg';



const Header = ({ cartItemsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header center">
      <div class="header__left">
                <Link to="/"> <img src={logo} alt="Логотип сайта" /> </Link>
                <Link to="/"> <img src={search} alt="Search" /> </Link>
            </div>
            <nav class="header__right">
                <label for="header__check"><img src={menu} alt="menu"/></label>
                <Link to="/"> <img src={reg} alt="reg" /> </Link>
                <Link to="/"> <img src={cart} alt="cart" /> </Link>
            </nav>
            <input class="header__checkbox" id="header__check" type="checkbox"/>
            <div class="mobile-menu">
                <h3 class="mobile-menu__heading">MENU</h3>
                <div class="mobile-menu__box">
                    <div class="mobile-menu__item">
                        <Link to="/" class="mobile-menu__title"> MAN </Link> {/* Ссылка на каталог */}
                        <ul class="mobile-menu__list">
                            {/* Ссылки на элемент каталога */}
                            <Link to="/" class="mobile-menu__link"> Accessories </Link> 
                            <Link to="/" class="mobile-menu__link"> Bags </Link> 
                            <Link to="/" class="mobile-menu__link"> Denim </Link> 
                            <Link to="/" class="mobile-menu__link"> T-Shirts </Link> 
                        </ul>
                    </div>
                    <div class="mobile-menu__item">
                    <Link to="/" class="mobile-menu__title"> WOMAN </Link> {/* Ссылка на каталог */}
                        <ul class="mobile-menu__list">
                            {/* Ссылки на элемент каталога */}
                            <Link to="/" class="mobile-menu__link"> Accessories </Link> 
                            <Link to="/" class="mobile-menu__link"> Bags </Link> 
                            <Link to="/" class="mobile-menu__link"> Denim </Link> 
                            <Link to="/" class="mobile-menu__link"> T-Shirts </Link> 
                        </ul>
                    </div>
                    <Link to="/" class="mobile-menu__title"> KIDS </Link> {/* Ссылка на каталог */}
                        <ul class="mobile-menu__list">
                            {/* Ссылки на элемент каталога */}
                            <Link to="/" class="mobile-menu__link"> Accessories </Link> 
                            <Link to="/" class="mobile-menu__link"> Bags </Link> 
                            <Link to="/" class="mobile-menu__link"> Denim </Link> 
                            <Link to="/" class="mobile-menu__link"> T-Shirts </Link> 
                        </ul>
                </div>
            </div>
    </header>
  );
};

export default Header;