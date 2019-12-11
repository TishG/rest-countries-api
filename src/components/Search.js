import React from "react";
import "./Search.css";
import { connect } from "react-redux";
import { setSearch, filterByName } from "../redux/actionCreators";

const Search = ({ mode, search, setSearch, filterByName }) => {
  const searchStylesLight = {
    backgroundColor: "hsl(0, 0%, 100%)",
    color: "hsl(200, 15%, 8%)",
    boxShadow: "0px 2px 3px #eee"
  };
  const searchStylesDark = {
    backgroundColor: "hsl(209, 23%, 22%)",
    color: "hsl(0, 0%, 100%)",
    boxShadow: "0px 2px 3px rgba(0,0,0,0.8)"
  };

  const handleChange = e => {
    setSearch(e.target.value);
    filterByName(search);
  };

  return (
    <div
      className="search"
      style={mode === "light" ? searchStylesLight : searchStylesDark}
    >
      <div className="input-container">
        <ion-icon
          name="search"
          style={
            mode === "light"
              ? { color: searchStylesLight.color }
              : { color: searchStylesDark.color }
          }
        ></ion-icon>
        <input
          type="text"
          value={search}
          title="country"
          onChange={handleChange}
          style={
            mode === "light"
              ? { color: searchStylesLight.color }
              : { color: searchStylesDark.color }
          }
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mode: state.mode,
    search: state.search
  };
};

const mapDispatchToProps = {
  setSearch,
  filterByName
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
