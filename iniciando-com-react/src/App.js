import React from 'react';

class App extends React.Component {

  //props guarda os dados que foram repassados na cria��o do componenete. Dados s�o staticos e n�o s�o alterados

  //Declara��o de vari�veis
  state = {
    nome: "",
  }

  //Fun��es com Arrow functions n�o precisa ser declarada no construtor = () =>
  modificarNome = (event) => {
    this.setState({
      nome: event.target.value,
    });
  }

  criaComboBox = () => {
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

  //A class precisa do render para retornar o componente
  render(){
    //Vari�vel que recebe a fun��o para ser utilizada como tag
    const MeuComboBox = () => this.criaComboBox();

    //retornar
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Vari�vel state: {this.state.nome}</h1>
        <h1>Vari�vel recuperada da props: {this.props.nome} sua idade � {this.props.idade}</h1>
        <MeuComboBox />
      </>
    )
  }

}

//As functions ou class sempre devem ser exportadas para serem renderizadas
export default App;
