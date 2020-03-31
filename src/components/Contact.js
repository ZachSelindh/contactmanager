import React from "react";
import PropTypes from "prop-types";

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

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
