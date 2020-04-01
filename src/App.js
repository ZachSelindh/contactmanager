import React from "react";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <ContactList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
