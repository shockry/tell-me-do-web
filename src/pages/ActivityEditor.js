import React from "react";
import styled from "styled-components";
import ActivityList from "../components/ActivityList";

const PageTitle = styled.h1`
  font-size: 3em;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 40px;
`;

const ActivityEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ActivityEditor = ({ activities }) => {
  return (
    <ActivityEditorWrapper>
      <PageTitle> Edit your activities </PageTitle>
      <ActivityList activities={activities} />
    </ActivityEditorWrapper>
  );
};

export default ActivityEditor;
