import { styled } from "styled-components";
import Router from "./routes/Router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
`;

function App() {
  return (
    <Container>
      <Router />
    </Container>
  );
}

export default App;
