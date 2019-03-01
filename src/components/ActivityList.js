import React from "react";
import styled from "styled-components";
import { ACTIVITY_CIRCLE_MAX_SIZE } from "../constants";

const ActivityCircle = styled.div`
  background-color: #97699c;
  color: #ffffff;
  border-radius: 50%;
  margin-left: 5px;
  padding: 5px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  width: ${props => props.size}em;
  height: ${props => props.size}em;
  margin-top: ${props => props.marginTop || 0}px;
`;

const ActivityWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: center;
  margin-bottom: 20px;
`;

const getCircleSize = activity =>
  activity.name.length < ACTIVITY_CIRCLE_MAX_SIZE
    ? (activity.name.length * 60) / 100
    : (ACTIVITY_CIRCLE_MAX_SIZE * 60) / 100;

const ActivityList = ({ activities }) => {
  return (
    <ActivityWrapper>
      {activities.map((activity, index) => (
        <ActivityCircle
          marginTop={activity.margin}
          size={getCircleSize(activity)}
          title={activity.name}
          key={index}
        >
          {activity.name.length <= ACTIVITY_CIRCLE_MAX_SIZE
            ? activity.name
            : activity.name.slice(0, ACTIVITY_CIRCLE_MAX_SIZE) + "..."}
        </ActivityCircle>
      ))}
    </ActivityWrapper>
  );
};

export default ActivityList;
