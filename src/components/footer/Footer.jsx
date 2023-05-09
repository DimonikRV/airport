import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer__container container">
      <div id="footerMenu" className="footer__menu footer-menu">
        <div className="footer-menu__nav-links nav-links">
          <div className="info-footer-container">
            <div className="nav-links__item nav-item">
              <h4>Passengers</h4>
              <ul className="nav-item__list">
                <li className="nav-item__item">
                  <a href="/departures" className="nav-item__link">
                    Flight schedule
                  </a>
                </li>
                <li className="nav-item__item">
                  <a href="/services" className="nav-item__link">
                    Ordering services
                  </a>
                </li>
                <li className="nav-item__item">
                  <a href="/contacts" className="nav-item__link">
                    Contact Information
                  </a>
                </li>
                <li className="nav-item__item">
                  <a href="/terms" className="nav-item__link">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item__item">
                  <a href="/feedback" className="nav-item__link">
                    Feedback and suggestions form
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-links__item nav-item">
              <h4>Partners</h4>
              <ul className="nav-item__list">
                <li className="nav-item__item">
                  <a href="/corporate" className="nav-item__link">
                    Main
                  </a>
                </li>
                <li className="nav-item__item">
                  <a href="/corporate/ground-handling" className="nav-item__link">
                    Airport services provided
                  </a>
                </li>
                <li className="nav-item__item">
                  <a href="/corporate/characteristics" className="nav-item__link">
                    Characteristics of the aerodrome
                  </a>
                </li>
                <li className="nav-item__item">
                  <a href="/corporate/education" className="nav-item__link">
                    Educational center
                  </a>
                </li>
                <li className="nav-item__item">
                  <a href="/corporate/careers" className="nav-item__link">
                    Vacancies
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-links__item nav-item">
              <h4>Prescenter</h4>
              <ul className="nav-item__list">
                <li className="nav-item__item">
                  <a href="/press-centre" className="nav-item__link">
                    The main press center
                  </a>
                </li>
                <li className="nav-item__item">
                  <a href="/press-centre/all" className="nav-item__link">
                    Latest news
                  </a>
                </li>
                <li className="nav-item__item">
                  <a href="/press-centre/art-and-social" className="nav-item__link">
                    Social and art projects
                  </a>
                </li>
                <li className="nav-item__item">
                  <a href="/press-centre/financial-report" className="nav-item__link">
                    Financial statements
                  </a>
                </li>
                <li className="nav-item__item">
                  <a href="/press-centre/stats" className="nav-item__link">
                    Passenger traffic statistics
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__contacts">
            <div className="info-block">
              <h4>Aviation reference</h4>
              <div className="info-block__phone">
                <a href="tel:+380445004973">+38 (044) 500 49 73</a>
              </div>
            </div>
            <div className="follow-us">
              <h4>Join us</h4>
              <ul className="follow-us__social-links">
                <li className="facebook-icon social-link">
                  <a href="/some/valid/uri" className="facebook-icon__link icon-link">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li className="twitter-icon social-link">
                  <a href="/some/valid/uri" className="twitter-icon__link icon-link">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="instagram-icon social-link">
                  <a href="/some/valid/uri" className="instagram-icon__link icon-link">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="youtube-icon social-link">
                  <a href="/some/valid/uri" className="youtube-icon__link icon-link">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li className="linkedin-icon social-link">
                  <a href="/some/valid/uri" className="linkedin-icon__link icon-link">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="sub-footer-container">
          <div className="sub-footer__row">
            <div className="copyright">
              © 2011-2021 <br />
              international airport "Kyiv"
            </div>
            <ul className="footer-sub-menu">
              <li className="footer-sub-menu__item">
                <a className="footer-sub-menu__link" href="https://ufuture.com/uk/">
                  <span>
                    Part of
                    <b>
                      Ufuture
                      <br />
                      Investment Group
                    </b>
                  </span>
                  <span className="footer-sub-menu__logo"></span>
                </a>
              </li>
              <li className="footer-sub-menu__item-sol">
                <a href="http://smpl.solutions" className="logo-simpl">
                  <span> Розробка сайту </span>
                  <span className="footer-sub-menu__logo-sol"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
