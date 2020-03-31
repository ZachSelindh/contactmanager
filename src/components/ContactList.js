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

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ContactList;
