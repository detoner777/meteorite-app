import React, { Component } from "react";
import axios from "axios";
import { Title } from "./Title";
import { BodyHeader } from "./BodyHeader";
import { Footer } from "./Footer";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: ""
    };
  }
  render() {
    return (
      <div>
        <Title />
        <BodyHeader />
        <Footer />
      </div>
    );
  }
}
