import React from "react";
import "./MyHeader.css";
import { connect } from "react-redux";

const MyHeader = ({ mode }) => {
  const headerStylesLight = {
    backgroundColor: "hsl(0, 0%, 100%)",
    color: "hsl(200, 15%, 8%)",
    boxShadow: "0px 2px 3px #eee"
  };
  const headerStylesDark = {
    backgroundColor: "hsl(209, 23%, 22%)",
    color: "hsl(0, 0%, 100%)",
    boxShadow: "0px 2px 3px rgba(0,0,0, 0.7)"
  };

  return (
    <header
      style={mode === "light" ? headerStylesLight : headerStylesDark}
      className="header"
    >
      <h1>Where in the world?</h1>
      <div className="mode">
        <ion-icon
          name={mode === "light" ? "sunny" : "moon"}
          style={
            mode === "light"
              ? { color: "rgb(255,165,0)" }
              : { color: headerStylesDark }
          }
        ></ion-icon>
        <p>Dark Mode</p>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    mode: state.mode
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyHeader);
