import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/Styles.css';
import promo from '../../assets/img/promo.png';
import si1 from '../../assets/img/si1.jpg';
import si2 from '../../assets/img/si2.jpg';
import si3 from '../../assets/img/si3.jpg';
import sibig from '../../assets/img/sibig.jpg';
import ProductCard from '../../components/ProductCard/ProductCard';
import Prefooter from '../../components/Prefooter/Prefooter';
import Advantages from '../../components/Advantages/Advantages';


const Home = ({ cartItemsCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <section class="promo">
                <div class="promo__img">
                    <img src={promo} alt="photo promo" />
                </div>
                <div class="promo__content">
                    <div class="promo__info">
                        <p class="promo__title">THE BRAND</p>
                        <p class="promo__heading">OF LUXERIOUS FASHION</p>
                    </div>
                </div>
            </section>
            <section class="sale center">
                <div class="sale__item">
                    <img src={si1} alt="sale image" />
                    <div class="sale__content">
                        <p class="sale__text">30% OFF</p>
                        <h3 class="sale__heading">FOR WOMEN</h3>
                    </div>
                </div>
                <div class="sale__item">
                    <img src={si2} alt="sale image" />
                    <div class="sale__content">
                        <p class="sale__text">30% OFF</p>
                        <h3 class="sale__heading">FOR WOMEN</h3>
                    </div>
                </div>
                <div class="sale__item">
                    <img src={si3} alt="sale image" />
                    <div class="sale__content">
                        <p class="sale__text">30% OFF</p>
                        <h3 class="sale__heading">FOR WOMEN</h3>
                    </div>
                </div>
                <div class="sale__item sale__item_big">
                    <img src={sibig} alt="sale image" />
                    <div class="sale__content">
                        <p class="sale__text">30% OFF</p>
                        <h3 class="sale__heading">FOR WOMEN</h3>
                    </div>
                </div>
            </section>
            <section class="product-box center">
                <h2 class="product-box__heading">Fetured Items</h2>
                <p class="product-box__text">Shop for items based on what we featured in this week</p>
                <div class="product-box__content">
                    < ProductCard />
                    < ProductCard />
                    < ProductCard />
                    < ProductCard />
                    < ProductCard />
                    < ProductCard />
                </div>
                <div class="product-box_ending">
                    <p class="product-box_ending_text">Browse All Product</p>
                </div>
            </section>
            <Advantages />
            <Prefooter />
        </div>
    );
};

export default Home;