import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchCountries } from "./redux/actionCreators";

//components
import MyHeader from "./components/MyHeader";
import Search from "./components/Search";
import MySelect from "./components/MySelect";
import Countries from "./components/Countries";

// ### Neutral

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

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
    <div className="app">
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
