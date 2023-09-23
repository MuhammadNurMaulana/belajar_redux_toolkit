import { ChangeBg } from "./components/ChangeBg";
import { Counter } from "./components/Counter";
import { FetchAxios } from "./components/FetchAxios";
import { FetchUsers } from "./components/FetchUsers";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <h1>Redux Toolkit</h1>
      <Counter />
      <Navbar />
      <ChangeBg />
      <FetchUsers />
      <FetchAxios />
    </>
  );
}

export default App;
