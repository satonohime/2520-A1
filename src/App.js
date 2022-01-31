import React, { Component } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

class App extends Component {
  constructor() {
    super();
    this.state = { operations: [] };
  }

  calculate = () => {
    this.setState({ operations: [eval(this.state.operations.join(""))] });
  };

  handleClick = (event) => {
    const clickValue = event.target.getAttribute("value");

    switch (clickValue) {
      case "clear":
        this.setState({ operations: [] });
        break;
      case "equal":
        try {
          this.calculate();
        } catch (error) {
          this.setState({ operations: ["Error"] });
        }
        break;
      default:
        let newOperations = [...this.state.operations, clickValue];
        this.setState({ operations: newOperations });
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <Display inputData={this.state.operations} />
        <Buttons clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
