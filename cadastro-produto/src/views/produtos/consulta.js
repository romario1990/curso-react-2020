import React from 'react';

import ProdutoService from '../../app/produtoService';
import { withRouter } from 'react-router-dom';
import Card from '../../components/card';
import ProdutosTable from './produtosTable';

class ConsultaProdutos extends React.Component {

    state = {
        produtos: []
    }

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({ produtos });
    }

    editarAction = (sku) => {
        console.log(sku);
        this.props.history.push(`/cadastro-produtos/${sku}`);
    }

    deletarAction = (sku) => {
        const produtos = this.service.deletar(sku);
        this.setState({ produtos })
    }

    render(){
        return (
            <Card header="Consulta Produtos">
                <ProdutosTable  produtos={this.state.produtos}
                                editarAction={this.editarAction} 
                                deletarAction={this.deletarAction}/>
            </Card>
        )
    }
}

export default withRouter(ConsultaProdutos)