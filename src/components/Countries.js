import React, { useEffect } from "react";
import "./Countries.css";
import { connect } from "react-redux";
import { fetchCountries } from "../redux/actionCreators";

//components
import Country from "./Country";

const Countries = ({ loading, countries, mode }) => {
  useEffect(() => {
    fetchCountries();
  }, []);
  if (countries !== undefined && countries.length) {
    console.log("countries from Countries.js", countries);
  }
  if (loading) return <div>...loading..</div>;
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
  else return <div>Search for a country</div>;
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    mode: state.mode
  };
};

export default connect(mapStateToProps)(Countries);