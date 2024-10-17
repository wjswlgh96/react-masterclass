import styled from "styled-components";

import { CircleProps } from "../types/props/Circle";

const Container = styled.div<CircleProps>`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: ${(props) =>
    props.borderColor ? `5px solid ${props.borderColor}` : `none`};
  background-color: ${(props) => props.bgColor};

  box-sizing: border-box;
`;

export default function Circle({ bgColor, borderColor, text }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor}>
      {text}
    </Container>
  );
}
