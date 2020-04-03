import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ContactList from "./components/contacts/ContactList";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={ContactList} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
