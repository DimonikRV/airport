import React, { useState } from 'react';
import NavigationMobile from '../navigationMobile/NavigationMobile';
import './header.scss';

const Header = () => {
  const [visible, setVisible] = useState(false);

  const handleIsVisible = () => {
    setVisible(prevVisible => !prevVisible);
  };

  return (
    <>
      <div className="header__logo">
        <a id="#" href="/"></a>
      </div>
      <nav className="header__navigation navigation">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <a href="#">Passangers</a>
          </li>
          <li className="navigation__list-item">
            <a href="#">Services IEV</a>
          </li>
          <li className="navigation__list-item">
            <a href="#">VIP</a>
          </li>
          <li className="navigation__list-item">
            <a href="#">Partners</a>
          </li>
          <li className="navigation__list-item">
            <a href="#">Press center</a>
          </li>
          <li className="navigation__list-item">
            <a href="#">UA</a>
          </li>
        </ul>
      </nav>
      <button className="navigation__button" onClick={handleIsVisible}>
        <i className="fas fa-bars"></i>
      </button>
      {visible && <NavigationMobile handleIsVisible={handleIsVisible} visible={visible} />}
    </>
  );
};
export default Header;
