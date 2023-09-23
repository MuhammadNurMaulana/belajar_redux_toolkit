import { ChangeBg } from "./components/ChangeBg";
import { Counter } from "./components/Counter";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <h1>Redux Toolkit</h1>
      <Counter />
      <Navbar />
      <ChangeBg />
    </>
  );
}

export default App;
