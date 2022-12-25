import React from 'react';
import './App.css';
import Counter from './component/counter';
import Form from './component/Form';
import { HealperContext } from './context';

function App() {
    const [name,setName]=React.useState("");
    const [count,setCount]=React.useState(0);
  return (
    <div className="App">
      <HealperContext.Provider value={{ count, setCount, name, setName }}>
      <Form />
      <Counter />
      </HealperContext.Provider>
    </div>
  );
}

export default App;
