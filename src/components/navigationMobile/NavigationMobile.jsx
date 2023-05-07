import React from 'react';
import './navigation.mobile.scss';

const NavigationMobile = ({ handleIsVisible }) => {
  const HandleCheck = event => {
    const isCurrentElem = event.target.classList.contains('navigation-mobile__list-item');
    if (!isCurrentElem) {
      return;
    }
    handleIsVisible();
  };
  return (
    <nav className="header__navigation-mobile navigation-mobile">
      <ul className="navigation-mobile__list" onClick={HandleCheck}>
        <li className="navigation-mobile__list-item">
          <a href="#">Passangers</a>
        </li>
        <li className="navigation-mobile__list-item">
          <a href="#">Services IEV</a>
        </li>
        <li className="navigation-mobile__list-item">
          <a href="#">VIP</a>
        </li>
        <li className="navigation-mobile__list-item">
          <a href="#">Partners</a>
        </li>
        <li className="navigation-mobile__list-item">
          <a href="#">Press center</a>
        </li>
        <li className="navigation-mobile__list-item">
          <a href="#">UA</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMobile;
