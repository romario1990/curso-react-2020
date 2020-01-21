import React from 'react';

function App (props) {

  //props guarda os dados que foram repassados na cria��o do componenete. Dados s�o staticos e n�o s�o alterados


  //Fun��es com Arrow functions n�o precisa ser declarada no construtor = () =>
  const modificarNome = event => {
    console.log(event.target.value)
  }

  const criaComboBox = () => {
    const opcoes = ['Fulano', 'ciclano'];
    //Map percorre a lista trocando os valores da vari�vel opcao
    const comboBoxOpcoes = opcoes.map(opcao => <option> {opcao}</option>);

    //Retorna a tag n�o pode retornar mais de uma tag, para isto deve ser adicionado 
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
      <h1>Vari�vel state: {props.nome}</h1>
      <h1>Vari�vel recuperada da props: {props.nome} sua idade � {props.idade}</h1>
      <MeuComboBox />
    </>
  )

}

//As functions ou class sempre devem ser exportadas para serem renderizadas
export default App;
