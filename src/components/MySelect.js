import React from "react";
import "./MySelect.css";
import { connect } from "react-redux";

const MySelect = ({ mode }) => {
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
    <select className="my-select" name="regions" id="regions" style={mode === "light" ? mySelectStylesLight : mySelectStylesDark}>
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

const mapStateToProps = state => {
  return {
    mode: state.mode,
    MySelect: state.MySelect
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MySelect);
