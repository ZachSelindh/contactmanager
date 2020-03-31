import React from "react";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        <ContactList />
      </div>
    </div>
  );
}

export default App;
