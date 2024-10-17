import Circle from "./components/Circle";

function App() {
  return (
    <div>
      <Circle bgColor={"teal"} borderColor={"tomato"} />
      <Circle bgColor={"tomato"} borderColor="teal" />
    </div>
  );
}

export default App;
