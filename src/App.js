import React from "react";
/* import ContactList from "./components/ContactList"; */
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        <Contact name="Joe" email="joe@test.com" phone="(281)-555 5555" />
        <Contact name="Karen" email="karen@test.com" phone="(281)-555-5556" />
      </div>
    </div>
  );
}

export default App;
