import React from "react";
import { connect } from "react-redux";

//components
import Search from "../components/Search";
import MySelect from "../components/MySelect";
import Countries from "../components/Countries";

//styles
import "./Home.css";
const mainBackgroundColorLight = {
  backgroundColor: "hsl(0, 0%, 98%)"
};
const mainBackgroundColorDark = {
  backgroundColor: "hsl(207, 26%, 17%)"
};
const Home = ({ mode, countries }) => {
  return (
    <main
      className="home"
      style={
        mode === "light" ? mainBackgroundColorLight : mainBackgroundColorDark
      }
    >
      <div className="search-container">
        <Search />
        <MySelect />
      </div>
      {/* <Pagination /> */}
      <Countries countries={countries} />
    </main>
  );
};

const mapStateToProps = state => {
  return {
    mode: state.mode,
    countries: state.countries
  };
};

export default connect(mapStateToProps)(Home);
