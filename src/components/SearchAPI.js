import React, { Component } from "react";
import { Button, Input, InputGroupAddon, InputGroup } from "reactstrap";

export class SearchAPI extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  //passes changed value from form to Home.js
  handleChange(e) {
    this.props.handleChange(e.target.value);
  }

  //copies a shortened URL to keyboard
  handleClick() {
    this.props.handleClick();
    this.props.handlePagination();
  }

  handleKeyPress(target) {
    if (target.charCode == 13) {
      this.handleClick();
    }
  }

  render() {
    return (
      <div className="search-container">
        <InputGroup>
          <Input
            placeholder="Type a search query"
            id="home-query"
            type="text"
            value={this.props.userInput}
            onChange={e => this.handleChange(e)}
            onKeyPress={this.handleKeyPress}
          />

          <InputGroupAddon addonType="append">
            <Button color="primary" onClick={this.handleClick}>
              {this.props.loading}
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}
