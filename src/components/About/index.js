import React from 'react';

const index = () => {
  return (
    <section className="section about" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title about__title">
            About Halloween <br /> Night
          </h2>
          <p className="about__description">
            Night of all saints, or all the dead is celebrated on october 31 and
            it is a very fun international celebration, this celebration comes
            from ancient origins, and is already celebrated by everyone.
          </p>
          <a
            href="https://github.com/besal101/halloween-react"
            className="button"
          >
            Know More
          </a>
        </div>
        <img src="./img/about-img.png" alt="" className="about__img" />
      </div>
    </section>
  );
};

export default index;
