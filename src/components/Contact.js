import React from "react";

function Contact(props) {
  const { name, email, phone } = props;
  return (
    <div>
      <h4>{name}</h4>
      <ul>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
      </ul>
    </div>
  );
}

export default Contact;
