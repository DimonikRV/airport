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
        <a href="/some/valid/uri">.</a>
      </div>
      <nav className="header__navigation navigation">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <a href="/some/valid/uri">Passengers</a>
          </li>
          <li className="navigation__list-item">
            <a href="/some/valid/uri">Services IEV</a>
          </li>
          <li className="navigation__list-item">
            <a href="/some/valid/uri">VIP</a>
          </li>
          <li className="navigation__list-item">
            <a href="/some/valid/uri">Partners</a>
          </li>
          <li className="navigation__list-item">
            <a href="/some/valid/uri">Press center</a>
          </li>
          <li className="navigation__list-item">
            <a href="/some/valid/uri">UA</a>
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
