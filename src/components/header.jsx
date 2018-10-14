import React, { Component } from "react";
import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
};

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-img">
          <img
            className="img-responsive"
            src={require("../images/logo.png")}
            alt="timpredict_logo"
          />
        </div>
        <Particles params={particleOpt} />
      </div>
    );
  }
}

export default Header;
