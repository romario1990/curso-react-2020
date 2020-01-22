import React from 'react';

import { Switch, Route } from 'react-router-dom';


import CadastroProduto from './views/produtos/cadastro';
import ConsultaProdutos from './views/produtos/consulta';
import Home from './views/home';

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cadastro-produtos/:sku?" component={CadastroProduto} />
            <Route exact path="/consulta-produtos" component={ConsultaProdutos} />
        </Switch>
    )
}


