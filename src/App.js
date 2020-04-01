import React from "react";
import ContactList from "./components/contacts/ContactList";
import Header from "./components/layout/Header";

import AddContact from "./components/contacts/AddContact";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <AddContact />
          <ContactList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
