import { styled } from "styled-components";
import Router from "./routes/Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { HelmetProvider } from "react-helmet-async";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
`;

function App() {
  return (
    <Container>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
      <ReactQueryDevtools />
    </Container>
  );
}

export default App;
