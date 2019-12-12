import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

//styles
import "./CountryDetails.css";
const stylesLight = {
  backgroundColor: "hsl(0, 0%, 98%)",
  color: "hsl(200, 15%, 8%)"
};
const stylesDark = {
  backgroundColor: "hsl(207, 26%, 17%)",
  color: "hsl(0, 0%, 100%)"
};

const btnLight = {
  backgroundColor: "hsl(0, 0%, 100%)",
  color: "hsl(200, 15%, 8%)",
  boxShadow: "0px 2px 3px #eee"
};
const btnDark = {
  backgroundColor: "hsl(209, 23%, 22%)",
  color: "hsl(0, 0%, 100%)",
  boxShadow: "0px 2px 3px rgba(0,0,0, 0.7)"
};

const CountryDetails = ({ mode, selectedCountry, clearSelectedCountry }) => {
  console.log(selectedCountry);
  let c = selectedCountry;
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };
  return c ? (
    <div
      className="country-details"
      style={mode === "light" ? stylesLight : stylesDark}
    >
      <div>
        <button
          style={mode === "light" ? btnLight : btnDark}
          className="back-btn"
          onClick={handleClick}
        >
          <ion-icon name="arrow-back"></ion-icon>Back{" "}
        </button>{" "}
        <div className="details-container">
          <img src={c.flag} alt="" className="flag" />
          <div className="info">
            <h1>{c.name}</h1>
            <div className="flex-row">
              <div className="info-left">
                <p>
                  <span className="text-bold">Native Name:</span> {c.nativeName}{" "}
                </p>
                <p>
                  <span className="text-bold">Population:</span> {c.population}
                </p>
                <p>
                  <span className="text-bold">Region:</span> {c.region}
                </p>
                <p>
                  <span className="text-bold">Sub Region:</span> {c.subregion}
                </p>
                <p>
                  <span className="text-bold">Capital:</span> {c.capital}
                </p>
              </div>
              <div className="info-right">
                <p>
                  <span className="text-bold">Top Level Domain:</span>{" "}
                  {c.topLevelDomain}
                </p>
                <ul>
                  <span className="text-bold">Currencies:</span>
                  {c.currencies.map(name => (
                    <li key={name.code}>{name.name}</li>
                  ))}
                </ul>
                <ul>
                  <span className="text-bold">Languages:</span>
                  {c.languages.map(lang => (
                    <li key={lang.name}>{lang.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="tags">
              <ul>
                <span className="text-bold">Border Countries:</span>
                {c.borders.map(border => (
                  <li
                    style={mode === "light" ? btnLight : btnDark}
                    key={border}
                  >
                    {border}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="no-country-selected"
      style={mode === "light" ? stylesLight : stylesDark}
    >
      <button
        style={mode === "light" ? btnLight : btnDark}
        className="back-btn"
        onClick={handleClick}
      >
        <ion-icon name="arrow-back"></ion-icon>Back{" "}
      </button>{" "}
      No country selected, please try again.
    </div>
  );
};
const mapStateToProps = state => {
  return {
    mode: state.mode,
    selectedCountry: state.selectedCountry
  };
};

export default connect(mapStateToProps)(CountryDetails);
