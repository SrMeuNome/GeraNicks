import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
import './index.css';
import Cabecalho from './components/cabecalho';
import Corpo from './components/corpo';
import Rodape from './components/rodape';

//O container-fluid é para cobrir toda a pagina
//O bg-dark é também elemento bootstrap para alteração da cor do funco para preto
//pt-5 e my-5 é para almento da borda de distancia da tela do container
//text-white serve para deixar todo o texto branco
//antes de publicar fazer um 'npm run deploy'

class Main extends React.Component
{
  render(){
    return(
      <div className="container-fluid">
        <Cabecalho />
        <Corpo />
        <Rodape />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))