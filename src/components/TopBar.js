import React from "react";
import styled from "styled-components";
import UserAvatar from "./UserAvatar";
import LogoutButton from "./LogoutButton";

const TopBarContainer = styled.div`
  position: fixed;
  display: flex;
  padding: 6px 0px 0px 6px;
`;

const TopBar = props => {
  return (
    <TopBarContainer>
      <UserAvatar>A</UserAvatar>
      <LogoutButton onClick={() => console.log("HAHA")}> Logout </LogoutButton>
    </TopBarContainer>
  );
};

export default TopBar;
