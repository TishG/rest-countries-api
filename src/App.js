import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCountries } from "./redux/actionCreators";

//components
import MyHeader from "./components/MyHeader";
import Home from "./routes/Home";
import CountryDetails from "./routes/CountryDetails";

// import Pagination from "./components/Pagination";

const App = ({ mode, fetchCountries }) => {
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
    <Router>
      <div
        className="app"
        style={
          mode === "light" ? mainBackgroundColorLight : mainBackgroundColorDark
        }
      >
        <MyHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country/:name" component={CountryDetails} />
        </Switch>
      </div>
    </Router>
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
