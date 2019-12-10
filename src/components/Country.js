import React from "react";
import "./Country.css";

const Country = ({ image, name, population, region, capital, mode }) => {
  const cardStylesLight = {
    backgroundColor: "hsl(0, 0%, 100%)",
    color: "hsl(200, 15%, 8%)",
    boxShadow: "0px 2px 3px #eee"
  };
  const cardStylesDark = {
    backgroundColor: "hsl(207, 26%, 17%)",
    color: "hsl(0, 0%, 100%)",
    boxShadow: "0px 2px 3px rgba(0,0,0,0.8)"
  };
  return (
    <div
      className="country-card"
      style={mode === "light" ? cardStylesLight : cardStylesDark}
    >
      <img src={image} alt="name" />
      <div className="card-bottom">
        <h1>{name}</h1>
        <p>
          <span>Population:</span>
          {population}
        </p>
        <p>
          <span>Region:</span>
          {region}
        </p>
        <p>
          <span>Capital:</span>
          {capital === null || undefined ? "N/A" : capital}
        </p>
      </div>
    </div>
  );
};

export default Country;
