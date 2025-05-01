import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/Styles.css';
import Intersect from '../../assets/img/Intersect.png';

const Prefooter = ({ cartItemsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section class="prefooter center" >
            <div class="prefooter_quote">
                <img src={Intersect} alt="photo Intersect"/>
                <p class="quote_text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
            </div>
            <div class="prefooter_sub">
                <p class="sub">SUBSCRIBE</p>
                <p class="sub2">FOR OUR NEWLETTER AND PROMOTION</p>
                <div>
                    <input class="input_sub" type="text" value="Enter Your Email"/>
                    <button class="button_sub">Subscribe</button>
                </div>
            </div>
        </section>
  );
};

export default Prefooter;