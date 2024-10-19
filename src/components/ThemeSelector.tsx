import styled from "styled-components";
import { useTheme } from "../function/useTheme";
import { ButtonProps } from "../types/props/Button";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button<ButtonProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.$bgColor};
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.rTextColor};
  cursor: pointer;
`;

export default function ThemeSelector() {
  const { isLight, toggleTheme } = useTheme();

  return (
    <Container>
      <Button $bgColor={isLight ? "#111" : "whitesmoke"} onClick={toggleTheme}>
        {isLight ? "다크모드" : "라이트모드"}
      </Button>
    </Container>
  );
}
