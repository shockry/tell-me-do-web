import React, { Component } from "react";
import AppWrapper from "./components/AppWrapper";
import Suggestor from "./pages/Suggestor";
import TopBar from "./components/TopBar";

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <TopBar />
        <Suggestor />
      </AppWrapper>
    );
  }
}

export default App;
