import React from 'react';

class App extends React.Component {

  //props guarda os dados que foram repassados na criação do componenete. Dados são staticos e não são alterados

  //Declaração de variáveis
  state = {
    nome: "",
  }

  //Funções com Arrow functions não precisa ser declarada no construtor = () =>
  modificarNome = (event) => {
    this.setState({
      nome: event.target.value,
    });
  }

  criaComboBox = () => {
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

  //A class precisa do render para retornar o componente
  render(){
    //Variável que recebe a função para ser utilizada como tag
    const MeuComboBox = () => this.criaComboBox();

    //retornar
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Variável state: {this.state.nome}</h1>
        <h1>Variável recuperada da props: {this.props.nome} sua idade é {this.props.idade}</h1>
        <MeuComboBox />
      </>
    )
  }

}

//As functions ou class sempre devem ser exportadas para serem renderizadas
export default App;
