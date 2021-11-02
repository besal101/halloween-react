import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BiUpArrowAlt } from 'react-icons/bi';

const index = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <a
            href="https://github.com/besal101/halloween-react"
            className="footer__logo"
          >
            <img src="./img/logo.png" alt="" className="footer__logo" />
            Halloween
          </a>
          <p className="footer__description">
            Enjoy the scariest night <br /> of your life.
          </p>
          <div className="footer__social">
            <a href="https://facebook.com" className="footer__social-link">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" className="footer__social-link">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" className="footer__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">About</h3>
          <ul className="footer__links">
            <li>
              <a
                href="https://github.com/besal101/halloween-react"
                className="footer__link"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://github.com/besal101/halloween-react"
                className="footer__link"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="https://github.com/besal101/halloween-react"
                className="footer__link"
              >
                News
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Our Company</h3>
          <ul className="footer__links">
            <li>
              <a
                href="https://github.com/besal101/halloween-react"
                className="footer__link"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://github.com/besal101/halloween-react"
                className="footer__link"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="https://github.com/besal101/halloween-react"
                className="footer__link"
              >
                Our mission
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Our Services</h3>
          <ul className="footer__links">
            <li>
              <a
                href="https://github.com/besal101/halloween-react"
                className="footer__link"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="https://github.com/besal101/halloween-react"
                className="footer__link"
              >
                Discounts
              </a>
            </li>
            <li>
              <a
                href="https://github.com/besal101/halloween-react"
                className="footer__link"
              >
                Shipping Mode
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className="footer__copy">
        &#169; Halloween. ALL Rights Reserved
      </span>
      <img src="./img/footer1-img.png" alt="" className="footer__img-one" />
      <img src="./img/footer2-img.png" alt="" className="footer__img-one" />
      <a
        href="https://github.com/besal101/halloween-react"
        className="scroll__up"
        id="scroll-up"
      >
        <BiUpArrowAlt className="scroll__icon" />
      </a>
    </footer>
  );
};

export default index;
