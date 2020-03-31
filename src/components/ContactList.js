import React, { Component } from "react";
import Contact from "./Contact";

class ContactList extends Component {
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
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default ContactList;
