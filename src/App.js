import React, { useState } from "react";
import AppWrapper from "./components/AppWrapper";
import ActivityEditor from "./pages/ActivityEditor";
import TopBar from "./components/TopBar";

const getRandomMargin = () => Math.floor(Math.random() * 30);
const sampleActivities = [
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

const App = () => {
  const [activities, setActivities] = useState(sampleActivities);

  function addActivity(activityName) {
    setActivities([
      ...activities,
      {
        name: activityName,
        margin: getRandomMargin()
      }
    ]);
  }

  function deleteActivity(activityName) {
    setActivities(
      activities.filter(activity => activity.name !== activityName)
    );
  }

  return (
    <AppWrapper>
      <TopBar />
      <ActivityEditor
        activities={activities}
        addActivity={addActivity}
        deleteActivity={deleteActivity}
      />
    </AppWrapper>
  );
};

export default App;
