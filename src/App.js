import React, { Component } from "react";
import Counter from "./components/counter";
import Header from "./components/header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
