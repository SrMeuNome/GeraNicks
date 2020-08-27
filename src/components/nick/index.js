import React from 'react';
import imagemCopy from '../../assets/img/copy-icon.png';

//Função que cria e retorna strings de nicks
function GerarNick()
{
  let tamanhoMaximo = 15 //Pode ser alterado o tamanho máximo dos nicks
  
  let characteresVogais = 'AEIOUaeiou -_/'
  let characteresConsoantes = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz'
  let characteresEspeciais = ' -_/'
  let numerais = '1234567890'
  let characteres = ''

  let finalNick = '/'

  let resultado = '' //O nick final

  let quantidadeCharacteres

  for (let i = 0; i < tamanhoMaximo; i++)
  {
    //dicidir qual grupo de caracter tendo 40% de vogal e consoante, 10% especiais e numerais
    let sortarValorCharactere = (Math.floor(Math.random() * 9))
    if (sortarValorCharactere <= 3)
    {
      characteres = characteresConsoantes
    } else if (sortarValorCharactere <= 7)
    {
      characteres = characteresVogais
    } else if (sortarValorCharactere <= 8)
    {
      characteres = characteresEspeciais
    } else
    {
      characteres = numerais
    }

    quantidadeCharacteres = characteres.length

    //charAt retorna o charactare que eseta em uma index expecifico da string
    //floor é uma função que transforma números "quebrados" em inteiros
    //O Math.random() em JS retorna números em um intervalo de 0 e 1
    //a formula para random retornar números em um intervalo é "Math.random() * (max - min) + min"
    //O caractere de '/' foi escolhido para ser o fim de um nick
    let auxCharactere = characteres.charAt(Math.floor(Math.random() * (quantidadeCharacteres - 0) + 0))
    
    //Verificação para não ser gerado somente caracteres especiais
    if(auxCharactere.length < 3 && (auxCharactere === '-' || auxCharactere === '_' || auxCharactere === ' '))
    {
      continue
    }

    if(auxCharactere !== finalNick)
    {
      resultado += auxCharactere
    }
    else
    {
      if (resultado.length < 3)
      {
        continue
      }
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
    list.push(<ObjetosNicks text = {text} id = {i} />)
  }
  return(list)
}

function ObjetosNicks(prop)
{
  //Variavel de controle para as copias
  var copiado = false
  return(
    <div className = 'obj-nicks'>
      <div className = 'texto' id = {prop.id}>{prop.text}</div>
      <div className = 'botao-copiar'><button className = 'btn btn-primary botao-copiar' onClick = {function () {
        let auxText = prop.text
        
        let divText = document.getElementById(prop.id)

        //O objeto range é que determina o inicio e o fim da seleção
        let range = document.createRange()
        //A função selectNode seleciona determinada tag
        range.selectNode(divText)
        //Remover todas as seleções que tiver no computador para não dar erro
        window.getSelection().removeAllRanges()
        //Fazer a seleção sentro do espaço range pego anteriormente
        window.getSelection().addRange(range)
        //Comando para executar a Copia para o clipboard no sistema operacional
        if (!copiado)
        {
          document.execCommand('copy')
        }
        //Limpando a seleção novamente
        window.getSelection().removeAllRanges()
        
        //Aviso de item copiado
        divText.innerHTML = 'Copiado'
        copiado = true

        setTimeout(function ()
        {
          divText.innerHTML = auxText
          copiado = false
        }, 300)
        
      }}
      ><img src = {imagemCopy} alt = '' className = 'img-copy' /></button></div>
    </div>
  )
}

export default CriarObjetos;
