import React, { useState } from 'react';
import '../../styles/Styles.css';
import advantages from '../../assets/img/advantages-img.svg';
import advantages2 from '../../assets/img/advantages-img-2.svg';
import advantages3 from '../../assets/img/advantages-img-3.svg';

const Advantages = ({ cartItemsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div class="advantages center">
        <article class="advantages__item">
            <img class="advantages__img" src={advantages} alt="" />
            <h3 class="advantages__heading">Free Delivery</h3>
            <p class="advantages__text">
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
            </p>
        </article>
        <article class="advantages__item">
            <img class="advantages__img" src={advantages2} alt="" />
            <h3 class="advantages__heading">Free Delivery</h3>
            <p class="advantages__text">
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
            </p>
        </article>
        <article class="advantages__item">
            <img class="advantages__img" src={advantages3} alt="" />
            <h3 class="advantages__heading">Free Delivery</h3>
            <p class="advantages__text">
                Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
            </p>
        </article>
    </div>
  );
};

export default Advantages;