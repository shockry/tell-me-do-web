import React, { useState } from "react";
import styled from "styled-components";
import ActivityList from "../components/ActivityList";
import ActivityInput from "../components/ActivityInput";

const PageTitle = styled.h1`
  font-size: 3em;
  color: #ffffff;
  font-weight: bold;
`;

const ActivityEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const ActivityEditor = ({ activities, addActivity, deleteActivity }) => {
  const [selectedActivity, setSelectedActivity] = useState();

  function updateActivityText(value) {
    setSelectedActivity({ ...selectedActivity, name: value });
  }

  return (
    <ActivityEditorWrapper>
      <Header>
        <PageTitle> Edit your activities </PageTitle>
        <ActivityInput
          addActivity={addActivity}
          deleteActivity={deleteActivity}
          updateActivityText={updateActivityText}
          activity={selectedActivity}
        />
      </Header>
      <ActivityList
        activities={activities}
        setSelectedActivity={setSelectedActivity}
      />
    </ActivityEditorWrapper>
  );
};

export default ActivityEditor;
