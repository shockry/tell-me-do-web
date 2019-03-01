import React, { Component } from "react";
import AppWrapper from "./components/AppWrapper";
import ActivityEditor from "./pages/ActivityEditor";
import TopBar from "./components/TopBar";

const getRandomMargin = () => Math.floor(Math.random() * 30);
const activities = [
  { name: "cat", margin: getRandomMargin() },
  { name: "Read a book", margin: getRandomMargin() },
  { name: "Write a good song", margin: getRandomMargin() },
  { name: "Occupy Mars", margin: getRandomMargin() },
  {
    name:
      "Work at a pet store for three weeks and then buy a boat Work at a pet store for three weeks and then buy a boat",
    margin: getRandomMargin()
  }
];

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <TopBar />
        <ActivityEditor activities={activities} />
      </AppWrapper>
    );
  }
}

export default App;
