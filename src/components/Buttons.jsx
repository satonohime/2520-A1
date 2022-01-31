import React, { Component } from "react";
import Button from "./Button";
import "./css/buttons.css";

class Buttons extends Component {
  handleClick = (event) => {
    this.props.clickHandler(event);
  };

  render() {
    return (
      <div className="button-container">
        <div className="button-row">
          <Button
            onClick={this.handleClick}
            className="large-button"
            label="CE"
            value="clear"
            width="2"
          />
          <Button onClick={this.handleClick} label="X" value="*" />
          <Button onClick={this.handleClick} label="/" value="/" />
        </div>
        <div className="button-row">
          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="-" value="-" />
        </div>

        <div className="button-row">
          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <Button onClick={this.handleClick} label="+" value="+" />
        </div>

        <div className="last-rows">
          <div className="threeByTwo">
            <Button onClick={this.handleClick} label="1" value="1" />
            <Button onClick={this.handleClick} label="2" value="2" />
            <Button onClick={this.handleClick} label="3" value="3" />
            <Button />
            <Button onClick={this.handleClick} label="0" value="0" />
            <Button onClick={this.handleClick} label="." value="." />
          </div>

          <Button
            onClick={this.handleClick}
            className="large-button"
            label="="
            value="equal"
            height="2"
          />
        </div>
      </div>
    );
  }
}

export default Buttons;
