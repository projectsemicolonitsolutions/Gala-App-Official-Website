import React from "react";

const AboutCard = ({ title, content, className, shadow }) => {
  return (
    <article
      className={`about-card ${shadow ? `mini-shadow` : ``} ${className || ``}`}
    >
      <header>
        <h6 className="font-family-roboto-r">{title}</h6>
      </header>
      <p className="font-family-quicksand-r text-muted font-size-80">
        {content}
      </p>
    </article>
  );
};

export default AboutCard;
