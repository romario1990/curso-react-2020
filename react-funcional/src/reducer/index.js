import React, { useState } from 'react';

import useStore from './calcReducer';

function ReducerHook() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [action, setAction] = useState('+');
  const MeuComboBox = () => criaComboBox();

  const [store, dispath] = useStore();

  const somar = () => {
    const numero1 = parseInt(x)
    const numero2 = parseInt(y)

    
    console.log('Dispachando a action SOMA!', action)
    dispath({
        type:'SOMA',
        payload: numero1 + numero2
    })
  } 

  const subtrair = () => {
    const numero1 = parseInt(x)
    const numero2 = parseInt(y)


    console.log('Dispachando a action SUBTRACAO!')
    dispath({
        type:'SUBTRACAO',
        payload: numero1 - numero2
    })
  } 

  const calc = () => {
      if (action === '+'){
        somar();
      }else if (action === '-'){
        subtrair();
      }
      setAction('+');
  }

  const criaComboBox = () => {
    const opcoes = ['+', '-'];
    const comboBoxOpcoes = opcoes.map(opcao => <option key={opcao}>{opcao}</option>)
    return(
        <select onChange={e => setAction(e.target.value)}>
            {comboBoxOpcoes}
        </select>
    )
  }
  
  return (
    <div className="App">
      Número 1: <br />
      <input type='text' 
             onChange={e => setX(e.target.value)}
             value={x} /> <br />
      
      Operação: <br />
      <MeuComboBox /> <br />
      
      Número 2: <br />
      <input type='text' 
             onChange={e => setY(e.target.value)}
             value={y} /> <br />

      <button onClick={calc}>Calcular</button> <br />
      Resultado: <br />
      <input type='text'
             value={store.resultado}
             readOnly
             /> <br />
    </div>
  );
}

export default ReducerHook;
