import React from 'react';

function App (props) {

  //props guarda os dados que foram repassados na criação do componenete. Dados são staticos e não são alterados


  //Funções com Arrow functions não precisa ser declarada no construtor = () =>
  const modificarNome = event => {
    console.log(event.target.value)
  }

  const criaComboBox = () => {
    const opcoes = ['Fulano', 'ciclano'];
    //Map percorre a lista trocando os valores da variável opcao
    const comboBoxOpcoes = opcoes.map(opcao => <option> {opcao}</option>);

    //Retorna a tag não pode retornar mais de uma tag, para isto deve ser adicionado 
    //um retorno entre as tag do <React.fragment> </React.fragment> ou as tags <> </>
    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  const MeuComboBox = () => criaComboBox();

  return (
    <>
      <input type="text" value={props.nome} onChange={modificarNome} />
      <h1>Variável state: {props.nome}</h1>
      <h1>Variável recuperada da props: {props.nome} sua idade é {props.idade}</h1>
      <MeuComboBox />
    </>
  )

}

//As functions ou class sempre devem ser exportadas para serem renderizadas
export default App;
