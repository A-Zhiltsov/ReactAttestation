import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/Styles.css';
import INST from '../../assets/img/INST.svg';
import FB from '../../assets/img/FB.svg';
import PIN from '../../assets/img/PIN.svg';
import TW from '../../assets/img/TW.svg';

const Footer = ({ cartItemsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <footer class="footer center">
        <div>
            <h1 class="footer_text">© 2022  Brand  All Rights Reserved.</h1>
        </div>
        <div class="footer_imgs">
            <div class="footer_img">
                <img src={FB} alt="fb_pic"/>
            </div>
            <div class="footer_img">
                <img src={INST} alt="inst_pic"/>
            </div>
            <div class="footer_img">
                <img src={PIN} alt="pin_pic"/>
            </div>
            <div class="footer_img">
                <img src={TW} alt="tw_pic"/>
            </div>
        </div>
    </footer>
  );
};

export default Footer;