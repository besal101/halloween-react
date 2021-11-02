// import { GrClose } from 'react-icons/fa';
import { BiX } from 'react-icons/bi';
import { BiGridSmall } from 'react-icons/bi';
import React, { useState } from 'react';

function Index() {
  const [showmenu, setShowMenu] = useState(false);
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a
          href="https://github.com/besal101/halloween-react"
          className="nav__logo"
        >
          <img src="./img/logo.png" alt="" className="nav__logo-img" />
          Halloween
        </a>
        <div
          className={showmenu ? 'nav__menu show__menu' : 'nav__menu'}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link"
                onClick={(e) => setShowMenu(false)}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className="nav__link"
                onClick={(e) => setShowMenu(false)}
              >
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#trick"
                className="nav__link"
                onClick={(e) => setShowMenu(false)}
              >
                Candy
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#discount"
                className="nav__link"
                onClick={(e) => setShowMenu(false)}
              >
                Offers
              </a>
            </li>
            <a
              href="https://github.com/besal101/halloween-react"
              className="button button--ghost"
              onClick={(e) => setShowMenu(false)}
            >
              Support
            </a>
          </ul>
          {showmenu && (
            <div
              className="nav__close"
              id="nav-close"
              onClick={(e) => setShowMenu(false)}
            >
              <BiX />
            </div>
          )}
          <img src="./img/nav-img.png" alt="" className="nav__img" />
        </div>

        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={(e) => setShowMenu(true)}
        >
          <BiGridSmall />
        </div>
      </nav>
    </header>
  );
}

export default Index;
