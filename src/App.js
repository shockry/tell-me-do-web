import React, { Component } from "react";
import AppWrapper from "./components/AppWrapper";
import Suggestor from "./pages/Suggestor";

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Suggestor />
      </AppWrapper>
    );
  }
}

export default App;
