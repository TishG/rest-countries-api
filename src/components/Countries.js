import React, { useEffect } from "react";
import "./Countries.css";
import { connect } from "react-redux";
import { fetchCountries } from "../redux/actionCreators";

//components
import Country from "./Country";

const Countries = ({ loading, countries, mode, filteredCountries }) => {
  const lightModeFont = "hsl(200, 15%, 8%)";
  const darkModeFont = "hsl(0, 0%, 100%)";
  const font =
    mode === "light" ? { color: lightModeFont } : { color: darkModeFont };
  useEffect(() => {
    fetchCountries();
  }, []);
  if (filteredCountries.length) {
    countries = filteredCountries;
  }
  if (loading)
    return (
      <div style={font} className="loading">
        ...loading..
      </div>
    );
  if (countries && countries.length)
    return (
      <div className="countries">
        {countries.map(({ name, flag, population, region, capital }) => (
          <Country
            mode={mode}
            key={name}
            image={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        ))}
      </div>
    );
  else
    return (
      <div className="no-data" style={font}>
        Search for a country
      </div>
    );
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    mode: state.mode,
    countries: state.countries,
    filteredCountries: state.filteredCountries
  };
};

export default connect(mapStateToProps)(Countries);
