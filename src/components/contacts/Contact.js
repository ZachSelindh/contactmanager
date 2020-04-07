import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Link } from "react-router-dom";

import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`, { data: id })
      .then((res) =>
        dispatch({ type: "DELETE_CONTACT", payload: res.config.data })
      );
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i style={{ cursor: "pointer" }} onClick={this.onShowClick}>
                  ->
                </i>
                <i
                  style={{
                    cursor: "pointer",
                    float: "right",
                    color: "red",
                  }}
                  onClick={() => this.onDeleteClick(id, dispatch)}
                >
                  x
                </i>
                <Link
                  to={{
                    pathname: `contact/edit/${id}`,
                    state: { id, name, email, phone },
                  }}
                >
                  <p
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1em",
                      marginLeft: "1em",
                    }}
                  >
                    Edit
                  </p>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
