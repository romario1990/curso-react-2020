import React, { useState } from 'react';

function App() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [r, setR] = useState(0);

  const somar = () => {
    const numero1 = parseInt(x)
    const numero2 = parseInt(y)
    setR(numero1+numero2)
  }
  
  return (
    <div className="App">
      Número 1: <br />
      <input type='text' 
             onChange={e => setX(e.target.value)}
             value={x} /> <br />
      Número 2: <br />
      <input type='text' 
             onChange={e => setY(e.target.value)}
             value={y} /> <br />

      <button onClick={somar}>Somar</button> <br />
      Resultado: <br />
      <input type='text'
             value={r} /> <br />
    </div>
  );
}

export default App;
