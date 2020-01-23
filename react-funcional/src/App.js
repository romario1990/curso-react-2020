import React, { useState, useEffect } from 'react';

function App() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [r, setR] = useState(0);

  const somar = () => {
    const numero1 = parseInt(x)
    const numero2 = parseInt(y)
    setR(numero1+numero2)
  } 
  
  //primeiro parâmetro será executado
  //segundo parâmetro se passado vazio executa uma vez, se passar uma variavel quando ele for alterada será chamado e sem o
  //segundo parâmetro qualquer variável alterada será chamdo o evento.
  useEffect(() => {
    console.log('variável número', x)
  }, [])

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
