import React from "react";
import styled from "styled-components";
import Suggestion from "../components/Suggestion";
import SuggestionIntro from "../components/SuggestionIntro";
import Button from "../components/Button";

const SuggestorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 4px;
  width: 62vw;
  padding: 24px;
  box-shadow: 1px 1px 15px 1px #666666;
`;

const EditActivityListLink = styled.a`
  display: flex;
  align-self: flex-end;
  margin-top: 10px;
`;

const Suggestor = props => {
  return (
    <SuggestorContainer>
      <SuggestionIntro>How about you</SuggestionIntro>
      <Suggestion>Buy a cat</Suggestion>
      <Button primary>Nah</Button>
      <EditActivityListLink href="/">Edit activity list</EditActivityListLink>
    </SuggestorContainer>
  );
};

export default Suggestor;
