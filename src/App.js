import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchCountries } from "./redux/actionCreators";

//components
import MyHeader from "./components/MyHeader";
import Search from "./components/Search";
import MySelect from "./components/MySelect";
import Countries from "./components/Countries";
// import Pagination from "./components/Pagination";

const App = ({ mode, countries, fetchCountries }) => {
  const mainBackgroundColorLight = {
    backgroundColor: "hsl(0, 0%, 98%)"
  };
  const mainBackgroundColorDark = {
    backgroundColor: "hsl(207, 26%, 17%)"
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <div
      className="app"
      style={
        mode === "light" ? mainBackgroundColorLight : mainBackgroundColorDark
      }
    >
      <MyHeader />
      <main
        style={
          mode === "light" ? mainBackgroundColorLight : mainBackgroundColorDark
        }
      >
        <section className="app-search-container">
          <Search />
          <MySelect />
        </section>
        {/* <Pagination /> */}
        <Countries countries={countries} />
      </main>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    countries: state.countries,
    mode: state.mode
  };
};

const mapDispatchToProps = {
  fetchCountries
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
