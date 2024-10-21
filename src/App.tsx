import { styled } from "styled-components";
import Router from "./routes/Router";
import { ReactQueryDevtools } from "react-query/devtools";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
`;

function App() {
  return (
    <Container>
      <Router />
      <ReactQueryDevtools initialIsOpen />
    </Container>
  );
}

export default App;
