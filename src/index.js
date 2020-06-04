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

//Função que cria e retorna strings de nicks
function GerarNick()
{
  let tamanhoMaximo = 15 //Pode ser alterado o tamanho máximo dos nicks
  let finalNick = '/'
  let resultado = ''
  let characteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 -_/'
  let quantidadeCharacteres = characteres.length
  for (let i = 0; i < tamanhoMaximo; i++)
  {
    //charAt retorna o charactare que eseta em uma index expecifico da string
    //floor é uma função que transforma números "quebrados" em inteiros
    //O Math.random() em JS retorna números em um intervalo de 0 e 1
    //a formula para random retornar números em um intervalo é "Math.random() * (max - min) + min"
    //O caractere de '/' foi escolhido para ser o fim de um nick
    let auxCharactere = characteres.charAt(Math.floor(Math.random() * (quantidadeCharacteres - 0) + 0))
    if(auxCharactere !== finalNick)
    {
      resultado += auxCharactere
    }
    else
    {
      break
    }
  }

  return resultado
}

//Responsavel por gerar a quantidade desejada de objetos de nicks
function CriarObjetos(prop)
{
  let quantidade = prop.qtd
  let list = []
  for (let i = 0; i < quantidade; i++)
  {
    let text = GerarNick()
    list.push(<ObjetosNicks text = {text} />)
  }
  return(list)
}

function Corpo(prop)
{
  return(
    <div className = 'container-fluid bg-dark text-white corpo'>
      <div className = 'area-input'>
        <input name = 'quantidade' type = 'text' className = 'form-control' id = 'input-qtd' placeholder = 'Quantidade de Nicks' />
        <span className = 'espaco'></span>
        <button className = 'btn btn-primary' type = 'button' onClick = {function (){
            const qtd = document.getElementById('input-qtd').value
            ReactDOM.render(<CriarObjetos qtd = {qtd}/>, document.getElementById('nicks'))
          }
        }
        >Gerar</button>
      </div>

      <div className = 'area-nicks' id = 'nicks'>
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