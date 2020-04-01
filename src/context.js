import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Joe Doe",
        email: "Joe@test.com",
        phone: "(281)-555-5555"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@testkaren.com",
        phone: "(281)-555-5556"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@gmail.com",
        phone: "(281)-555-5557"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
