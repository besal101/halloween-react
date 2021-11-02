import React from 'react';
import { BiCartAlt } from 'react-icons/bi';
import './style.css';

const index = () => {
  return (
    <section className="section trick" id="trick">
      <h2 className="section__title">Trick or Treat</h2>
      <div className="trick__container container grid">
        <div className="trick__content">
          <img src="./img/trick-treat1-img.png" alt="" className="trick__img" />
          <h3 className="trick__title">Toffee</h3>
          <span className="trick__subtitle">Candy</span>
          <span className="trick__price">$11.99</span>
          <button className="button trick__button">
            <BiCartAlt className="trick__icon" />
          </button>
        </div>
        <div className="trick__content">
          <img src="./img/trick-treat2-img.png" alt="" className="trick__img" />
          <h3 className="trick__title">Bone</h3>
          <span className="trick__subtitle">Accessory</span>
          <span className="trick__price">$8.9</span>
          <button className="button trick__button">
            <BiCartAlt className="trick__icon" />
          </button>
        </div>
        <div className="trick__content">
          <img src="./img/trick-treat3-img.png" alt="" className="trick__img" />
          <h3 className="trick__title">Scare Crow</h3>
          <span className="trick__subtitle">Accessory</span>
          <span className="trick__price">$4.99</span>
          <button className="button trick__button">
            <BiCartAlt className="trick__icon" />
          </button>
        </div>
        <div className="trick__content">
          <img src="./img/trick-treat4-img.png" alt="" className="trick__img" />
          <h3 className="trick__title">Candy Cane</h3>
          <span className="trick__subtitle">Candy</span>
          <span className="trick__price">$7.99</span>
          <button className="button trick__button">
            <BiCartAlt className="trick__icon" />
          </button>
        </div>
        <div className="trick__content">
          <img src="./img/trick-treat5-img.png" alt="" className="trick__img" />
          <h3 className="trick__title">Pumpkin</h3>
          <span className="trick__subtitle">Accessory</span>
          <span className="trick__price">$7.8</span>
          <button className="button trick__button">
            <BiCartAlt className="trick__icon" />
          </button>
        </div>
        <div className="trick__content">
          <img src="./img/trick-treat6-img.png" alt="" className="trick__img" />
          <h3 className="trick__title">Ghost</h3>
          <span className="trick__subtitle">Accessory</span>
          <span className="trick__price">$4.2</span>
          <button className="button trick__button">
            <BiCartAlt className="trick__icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default index;
