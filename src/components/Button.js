import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: maroon;
  color: #ffffff;
  padding: 16px 0px;
  width: 50%;
  margin-top: 66px;
  font-size: 1.5em;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 2px 2px 2px #924747;
  :hover {
    background: #5f0101;
    box-shadow: 2px 2px 2px #924747;
  }
  :active {
    transform: translateY(2px);
    box-shadow: 1px 1px 1px #924747;
  }
  :focus {
    outline: none;
  }
`;

export default Button;
