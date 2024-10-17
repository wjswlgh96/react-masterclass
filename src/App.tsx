import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello, React with TypeScript</Title>
    </Wrapper>
  );
}

export default App;
