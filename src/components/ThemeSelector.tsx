import { styled, ThemeProvider } from "styled-components";
import React, { useState } from "react";
import { darkTheme, lightTheme } from "../theme";
import { ButtonProps } from "../types/props/Button";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.bgColor};
`;

const Button = styled.button<ButtonProps>`
  width: 100px;
  height: 100px;

  background-color: ${(props) => props.bgColor};
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.rTextColor};
  cursor: pointer;
`;

export default function ThemeSelector({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLight, setIsLight] = useState(true);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Container>
        <Button
          bgColor={isLight ? "#111" : "whitesmoke"}
          onClick={() => setIsLight(!isLight)}
        >
          {isLight ? "다크모드" : "라이트모드"}
        </Button>
      </Container>
      {children}
    </ThemeProvider>
  );
}
