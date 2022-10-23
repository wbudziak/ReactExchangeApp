import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 24px;
  outline: none;
  border: none;
  background-color: orange;
  color: white;
  font-size: 24px;
  transition: 0.3s linear all;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;
