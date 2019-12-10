import React from "react";
import "./Search.css";
import { connect } from "react-redux";
import { setSearch } from "../redux/actionCreators";

const Search = ({ mode, search, setSearch }) => {
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

  return (
    <form
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
          onChange={e => setSearch(e.target.value)}
          style={
            mode === "light"
              ? { color: searchStylesLight.color }
              : { color: searchStylesDark.color }
          }
        />
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    mode: state.mode,
    search: state.search
  };
};

const mapDispatchToProps = {
  setSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
