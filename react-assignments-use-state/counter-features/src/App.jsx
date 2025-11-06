import { useState } from "react";
import { Button } from "./components/Button";
import { Password } from "./components/Password";

function App(){
  const [count, setCount] = useState(true); 
  return <div>
      <Password value={count} func={setCount}></Password>
  </div>
}

export default App;