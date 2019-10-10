import React from "react";

const TutCard = ({ title, content, shadow, className }) => {
  return (
    <article
      className={`about-card ${shadow ? `mini-shadow` : ``} ${className || ``}`}
    >
      <section className="wh-80px rounded-circle mx-auto mb-4 bg-white"></section>
      <header>
        <h6 className="font-family-quicksand-book">{title}</h6>
      </header>
      <p className="font-family-quicksand-l font-size-80">{content}</p>
    </article>
  );
};

export default TutCard;
