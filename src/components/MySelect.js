import React from "react";
import "./MySelect.css";
import { connect } from "react-redux";
import { filterByRegion } from "../redux/actionCreators";

const MySelect = ({ mode, filterByRegion }) => {
  const mySelectStylesLight = {
    backgroundColor: "hsl(0, 0%, 100%)",
    color: "hsl(200, 15%, 8%)",
    boxShadow: "0px 2px 3px #eee"
  };
  const mySelectStylesDark = {
    backgroundColor: "hsl(209, 23%, 22%)",
    color: "hsl(0, 0%, 100%)",
    boxShadow: "0px 2px 3px rgba(0,0,0,0.8)"
  };

  return (
    <select
      className="my-select"
      name="regions"
      title="regions"
      id="regions"
      onChange={e => filterByRegion(e.target.value)}
      style={mode === "light" ? mySelectStylesLight : mySelectStylesDark}
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

const mapStateToProps = state => {
  return {
    mode: state.mode
  };
};

const mapDispatchToProps = {
  filterByRegion
};

export default connect(mapStateToProps, mapDispatchToProps)(MySelect);
