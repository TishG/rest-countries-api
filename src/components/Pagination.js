import React from "react";
import "./Pagination.css";
import { connect } from "react-redux";
import { setCurrentPage } from "../redux/actionCreators";

const Pagination = ({ countries, countriesPerPage, setCurrentPage, mode }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  let mySelectStylesLight = {
    backgroundColor: "hsl(0, 0%, 100%)",
    color: "hsl(200, 15%, 8%)",
    border: "1px solid hsl(200, 15%, 8%)",
    boxShadow: "0px 2px 3px #eee"
  };
  let mySelectStylesDark = {
    backgroundColor: "hsl(209, 23%, 22%)",
    color: "hsl(0, 0%, 100%)",
    border: "1px solid hsl(0, 0%, 100%)",
    boxShadow: "0px 2px 3px rgba(0,0,0,0.8)"
  };
  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li
          key={number}
          id={number}
          onClick={e => setCurrentPage(e.target.id)}
          style={mode === "light" ? mySelectStylesLight : mySelectStylesDark}
        >
          {number}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    countries: state.countries,
    countriesPerPage: state.countriesPerPage,
    mode: state.mode
  };
};

const mapDispatchToProps = {
  setCurrentPage
};
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
