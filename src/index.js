import React from 'react'
import ReactDOM from 'react-dom'
import './bootstrap.css'
import './index.css'
import imagemCopy from './img/copy-icon.png'


//O container-fluid é para cobrir toda a pagina
//O bg-dark é também elemento bootstrap para alteração da cor do funco para preto
//pt-5 e my-5 é para almento da borda de distancia da tela do container
//text-white serve para deixar todo o texto branco
//antes de publicar fazer um 'npm run deploy'

function Cabecalho(prop)
{
  return(
    <div className = 'container-fluid bg-dark text-white'>
        <h1>Gera Nicks</h1>
    </div>
  )
}

function ObjetosNicks(prop)
{
  return(
    <div className = 'obj-nicks'>
      <div className = 'texto'>{prop.text}</div>
      <div className = 'botao-copiar'><button className = 'btn btn-primary botao-copiar'><img src = {imagemCopy} alt = '' className = 'img-copy' /></button></div>
    </div>
  )
}

function Corpo(prop)
{
  return(
    <div className = 'container-fluid bg-dark text-white corpo'>
      <div className = 'area-nicks'>
        <ObjetosNicks text = 'Um texto bem grande' />
        <ObjetosNicks text = 'teste 2' />
        <ObjetosNicks text = 'teste 3' />
        <ObjetosNicks text = 'teste 4' />
        <ObjetosNicks text = 'teste 5' />
        <ObjetosNicks text = 'teste 6' />
        <ObjetosNicks text = 'teste 7' />
        <ObjetosNicks text = 'teste 8' />
        <ObjetosNicks text = 'teste 9' />
        <ObjetosNicks text = 'teste 10' />
        <ObjetosNicks text = 'teste 11' />
        <ObjetosNicks text = 'teste 12' />
        <ObjetosNicks text = 'teste 13' />
        <ObjetosNicks text = 'teste 14' />
        <ObjetosNicks text = 'teste 15' />
        <ObjetosNicks text = 'teste 16' />
        <ObjetosNicks text = 'Um texto bem grande' />
        <ObjetosNicks text = 'teste 2' />
        <ObjetosNicks text = 'teste 3' />
        <ObjetosNicks text = 'teste 4' />
        <ObjetosNicks text = 'teste 5' />
        <ObjetosNicks text = 'teste 6' />
        <ObjetosNicks text = 'teste 7' />
        <ObjetosNicks text = 'teste 8' />
        <ObjetosNicks text = 'teste 9' />
        <ObjetosNicks text = 'teste 10' />
        <ObjetosNicks text = 'teste 11' />
        <ObjetosNicks text = 'teste 12' />
        <ObjetosNicks text = 'teste 13' />
        <ObjetosNicks text = 'teste 14' />
        <ObjetosNicks text = 'teste 15' />
        <ObjetosNicks text = 'teste 16' />
      </div>
    </div>
  )
}

function Rodape(prop)
{
  return(
    <div className = 'container-fluid bg-dark text-white pt-3'>
      <h5>Esté é o rodapé</h5>
    </div>
  )
}


class Main extends React.Component
{
  render(){
    return(
      <div className = 'container-fluid'>
        <Cabecalho />
        <Corpo />
        <Rodape />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))