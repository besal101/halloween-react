import React from 'react';

const Index = () => {
  return (
    <section className="section category">
      <h2 className="section__title">
        Favourite Scare <br /> Category
      </h2>
      <div className="category__container container grid">
        <div className="category__data">
          <img src="./img/category1-img.png" alt="" className="category__img" />
          <h3 className="category__title">Ghosts</h3>
          <p className="category__description">
            Choose the ghosts, the scariest there are.
          </p>
        </div>
        <div className="category__data">
          <img src="./img/category2-img.png" alt="" className="category__img" />
          <h3 className="category__title">Pumpkins</h3>
          <p className="category__description">
            Choose the scariest pumpkins on the earth.
          </p>
        </div>
        <div className="category__data">
          <img src="./img/category3-img.png" alt="" className="category__img" />
          <h3 className="category__title">Witch Hat</h3>
          <p className="category__description">
            Pick the most stylist witch hat out there.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
