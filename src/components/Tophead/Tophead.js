import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../../styles/Styles.css';

const Tophead = ({ cartItemsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const location = useLocation();
  
  if (location.pathname === '/Registration') {
    return (
      <div class="top-head center">
              <div class="top-head__left">
                  <h2 class="top-head__left__heading">REGISTRATION</h2>
              </div>
          </div>
    );
  } else {
    return (
      <div class="top-head center">
              <div class="top-head__left">
                  <h2 class="top-head__left__heading">NEW ARRIVALS</h2>
              </div>
              <div class="top-head__right">
                  <div class="top-head__right__standard">HOME / </div> 
                  <div class="top-head__right__standard">MEN / </div> 
                  <div class="top-head__right__selected">NEW ARRIVALS</div> 
              </div>
          </div>
    );
  }
  
};

export default Tophead;