import React from 'react';

const index = () => {
  return (
    <section className="section discount" id="discount">
      <div className="discount__container container grid">
        <div className="discount__data">
          <h2 className="discount__title">
            50% Discount <br /> On New Products
          </h2>
          <a href="#" className="button">
            Go to New
          </a>
        </div>
        <img src="./img/discount-img.png" alt="" className="discount__img" />
      </div>
    </section>
  );
};

export default index;
