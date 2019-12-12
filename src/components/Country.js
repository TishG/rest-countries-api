import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setSelectedCountry } from "../redux/actionCreators";

//styles
import "./Country.css";
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

const Country = ({
  image,
  name,
  population,
  region,
  capital,
  mode,
  setSelectedCountry
}) => {
  const history = useHistory();
  const handleClick = () => {
    setSelectedCountry(name);
    history.push(`/country/${name}`);
  };
  return (
    <div
      onClick={handleClick}
      className="country-card"
      style={mode === "light" ? cardStylesLight : cardStylesDark}
    >
      <div className="img-container">
        <img src={image} alt="name" />
      </div>
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

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  setSelectedCountry
};

export default connect(mapStateToProps, mapDispatchToProps)(Country);
