import React, { Component } from "react";
import Counter from "./components/counter";
import Header from "./components/header";
import "./App.css";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Header />
          <Counter />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
