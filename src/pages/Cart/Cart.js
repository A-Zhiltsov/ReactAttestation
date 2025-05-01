import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/Styles.css';
import product1 from '../../assets/img/product1.jpg'


const Cart = ({ cartItemsCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div class="top-head center">
                <div class="top-head__left">
                    <h2 class="top-head__left__heading">SHOPPING CART</h2>
                </div>
            </div>
            <section class="cart center">
            <div class="cart__content">
                <div class="cart__content__items">
                    <div class="cart__content__items__item">
                        <img class="item__img" src={product1} alt="product_img"/>
                        <div class="cart__content__items__item__description">
                            <h2 class="description__heading">MANGO PEOPLE T‑SHIRT</h2>
                            <div class="description__pos">
                                <p>Price:</p>
                                <p class="description__pos__price">$300</p>
                            </div>
                            <div class="description__pos">
                                <p>Color:</p>
                                <p>Red</p>
                            </div>
                            <div class="description__pos">
                                <p>Size:</p>
                                <p>XL</p>
                            </div>
                            <div class="description__pos">
                                <p>Quantity:</p>
                                <p class="description__pos__quantity">2</p>
                            </div>
                        </div>
                        <svg class="item__close" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"/>
                            </svg>                            
                    </div>
                    <div class="cart__content__items__item">
                        <img class="item__img" src={product1} alt="product_img"/>
                        <div class="cart__content__items__item__description">
                            <h2 class="description__heading">MANGO PEOPLE T‑SHIRT</h2>
                            <div class="description__pos">
                                <p>Price:</p>
                                <p class="description__pos__price">$300</p>
                            </div>
                            <div class="description__pos">
                                <p>Color:</p>
                                <p>Red</p>
                            </div>
                            <div class="description__pos">
                                <p>Size:</p>
                                <p>XL</p>
                            </div>
                            <div class="description__pos">
                                <p>Quantity:</p>
                                <p class="description__pos__quantity">2</p>
                            </div>
                        </div>
                        <svg class="item__close" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"/>
                            </svg>                            
                    </div>
                </div>
                <div class="cart__content__buttons">
                    <button class="cart__content__buttons__button">
                        CLEAR SHOPPING CART
                    </button>
                    <button class="cart__content__buttons__button">
                        CONTINUE SHOPPING
                    </button>
                </div>
            </div>
            <div class="cart__purchase-box">
                <div class="cart__purchase-box__delivery">
                    <h2 class="delivery__heading">SHIPPING ADRESS</h2>
                    <input class="delivery__input" type="text" placeholder="State" required/>
                    <input class="delivery__input" type="text" placeholder="City" required/>
                    <input class="delivery__input" type="text" placeholder="Postcode / Zip" required/>
                    <button class="delivery__button">GET A QUOTE</button>
            </div>
                <div class="cart__purchase-box__upshot">
                    <div class="upshot__subtotal">
                        <p>SUB TOTAL</p>
                        <p class="upshot__subtotal__value">$900</p>
                    </div>
                    <div class="upshot__grandtotal">
                        <p>GRAND TOTAL</p>
                        <p class="upshot__grandtotal__value">$900</p>
                    </div>
                    <hr class="upshot__line"/>
                    <button class="upshot__button">PROCEED TO CHECKOUT</button>
                </div>
            </div>
            </section>
        </div>
    );
};

export default Cart;