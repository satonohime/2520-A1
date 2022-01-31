import React, { Component } from "react";
import "./css/button.css";

class Button extends Component {
  largeButton = ["CE", "="];
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={
          this.largeButton.includes(this.props.label)
            ? "Button Large"
            : "Button"
        }
        width={this.props.width}
        height={this.props.height}
        value={this.props.value}
      >
        {this.props.label}
      </div>
    );
  }
}

export default Button;
