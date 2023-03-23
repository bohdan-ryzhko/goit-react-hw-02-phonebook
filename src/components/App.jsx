import { Component } from "react";
import { Phonebook } from "./Phonebook/Phonebook";

export class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Phonebook />
      </div>
    )
  }
}