import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchCountries } from "./redux/actionCreators";

//components
import Header from "./components/Header";

const App = ({ loading, fetchCountries, countries }) => {
  console.log(loading);
  console.log(countries);

  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <div className="App">
      <Header />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    countries: state.countries
  };
};

const mapDispatchToProps = {
  fetchCountries
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
