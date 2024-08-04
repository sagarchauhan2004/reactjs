import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(0);

  if(counter <= 0){
    counter = 0;
  }

  const addValue = () => {
    setCounter(counter + 1);
    console.log(`addvalue clicked ${counter}`);
  };

    const revValue = () => {
      setCounter(counter - 1);
      console.log(`revValue clicked ${counter}`);
    };

  return (
    <>
      <h1>Code with sagar</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={revValue} >remove value {counter} </button>

      <p>footer {counter} </p>
    </>
  );
}

export default App;
