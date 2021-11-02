import React from 'react';

const index = () => {
  return (
    <section className="section newsletter">
      <div className="newsletter_container container">
        <h2 className="section__title">Our NewsLetter</h2>
        <p className="newsletter__description">
          Subscribe to get info about new products and sales directly to your
          inbox.
        </p>
        <form action="" className="newsletter__form">
          <input
            type="email"
            className="newsletter__input"
            placeholder="Enter your email"
          />
          <button className="button">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default index;
