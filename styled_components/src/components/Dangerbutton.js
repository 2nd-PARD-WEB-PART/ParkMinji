import styled from "styled-components";
import Button from "./Button";

const DangerButton = styled(Button)`
  background-color: #ff0000;
  border-radius: #ff0000;
  &:hover {
    background: blue;
  }
`;

export default DangerButton;
