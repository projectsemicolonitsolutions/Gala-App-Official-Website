import React from "react";

const HeaderBg = ({ value, className, background }) => {
  return (
    <h4
      className={className}
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}
    >
      {value}
    </h4>
  );
};

export default HeaderBg;
