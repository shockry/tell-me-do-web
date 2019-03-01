import React from "react";
import styled from "styled-components";
import UserAvatar from "./UserAvatar";
import LogoutButton from "./LogoutButton";

const TopBarWrapper = styled.div`
  position: fixed;
  display: flex;
  padding: 6px 0px 0px 6px;
`;

const TopBar = props => {
  return (
    <TopBarWrapper>
      <UserAvatar>A</UserAvatar>
      <LogoutButton onClick={() => console.log("HAHA")}> Logout </LogoutButton>
    </TopBarWrapper>
  );
};

export default TopBar;
