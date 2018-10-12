import React, { Component } from "react";
import Background from "../images/background_image.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p>Hi</p>
      </div>
    );
  }
}

export default Header;

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { Background } + ")"
};

class Section extends Component {
  render() {
    return <section style={sectionStyle} />;
  }
}
