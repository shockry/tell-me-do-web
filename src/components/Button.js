import styled, { css } from "styled-components";

const Button = styled.button`
  border: 2px solid maroon;
  padding: 16px 0px;
  width: 50%;
  margin-top: 66px;
  font-size: 1.5em;
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

export default Button;
