import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';

import { TarefasToolbar, TarefasTable } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TarefaList = () => {
  const classes = useStyles();

  const [tarefas] = useState([]);

  const salvar = (tarefa) => {
    console.log(tarefa);
    axios.post('http://minhastarefas-api.herokuapp.com/tarefas', tarefa, {
      headers: { 'x-tenant-id' : 'teste@teste.com' }
    }).then( response => {
      console.log(response.data);
    }).catch( erro => {
      console.log(erro);
    })
  }

  return (
    <div className={classes.root}>
      <TarefasToolbar  salvar={salvar}/>
      <div className={classes.content}>
        <TarefasTable tarefas={tarefas} />
      </div>
    </div>
  );
};

export default TarefaList;
