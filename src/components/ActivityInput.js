import React, { useState } from "react";
import styled, { css } from "styled-components";

const TextInput = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  width: 38em;
  font-weight: bold;
  color: #5e5d85;

  :focus {
    outline: none;
  }
`;

const ActivityInputWrapper = styled.div`
  display: flex;
`;

// TODO: Make a general purpose Button component and use it everywhere
const Button = styled.button`
  border: 2px solid maroon;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 2px 2px 2px #924747;
  background-color: transparent;
  color: maroon;

  :hover {
    background: maroon;
    color: #ffffff;
  }
  :active {
    transform: translateY(2px);
    box-shadow: 1px 1px 1px #924747;
  }
  :focus {
    outline: none;
  }

  ${props =>
    props.primary &&
    css`
      border: none;
      background-color: maroon;
      color: #ffffff;
      :hover {
        background: #5f0101;
      }
    `}
`;

const ActivityInput = ({
  activity,
  addActivity,
  deleteActivity,
  updateActivityText
}) => {
  const [activityName, setActivityName] = useState(
    activity ? activity.name : ""
  );

  function addActivityAndClearInput() {
    addActivity(activityName);
    setActivityName("");
  }

  return (
    <ActivityInputWrapper>
      <TextInput
        type="text"
        placeholder="Add a new activity"
        value={activityName}
        onChange={e => setActivityName(e.currentTarget.value)}
        onKeyUp={e => e.key === "Enter" && addActivityAndClearInput()}
      />
      <Button primary onClick={addActivityAndClearInput}>
        Add
      </Button>
    </ActivityInputWrapper>
  );
};

export default ActivityInput;
