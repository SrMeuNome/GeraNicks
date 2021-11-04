import React from 'react';
import imagemCopy from '../../assets/img/copy-icon.png';
import words from '../../assets/words/words.json';

//Função que cria e retorna strings de nicks
function GerarNick()
{
  let tamanhoMaximo = 16 //Pode ser alterado o tamanho máximo dos nicks
  
  //let numerais = '1234567890'

  let wordsSelected = []

  let result = '' //O nick final

  let lengthNick = 0;

  while (lengthNick <= tamanhoMaximo)
  {
    let sorterCharactereValue = (Math.round(Math.random() * 59))

    if (sorterCharactereValue <= 9)
    {
      wordsSelected = words.adjectives
    } else if (sorterCharactereValue <= 19)
    {
      wordsSelected = words.names
    } else if (sorterCharactereValue <= 29)
    {
      wordsSelected = words.nouns
    } else if (sorterCharactereValue <= 39)
    {
      wordsSelected = words.verbs
    } else
    {
      if(result.length >= 3) break
      continue
    }

    //O Math.random() em JS retorna números em um intervalo de 0 e 1
    //a formula para random retornar números em um intervalo é "Math.random() * (max - min) + min"
    //O caractere de '/' foi escolhido para ser o fim de um nick

    let repeatProcess = Math.round(Math.random() * 9)

    for(let i = 0; i <= repeatProcess; i++) {
      let qtdWords = Number(wordsSelected.length)

      let wordPosition = Number(Math.round(Math.random() * qtdWords))

      let word = String(wordsSelected[wordPosition]).replace(' ', '')

      let endBreak = Number(Math.round(Math.random() * (word.length - 1) + 1))

      let wordBreak = String(word.substring(0, endBreak))

      let isUpFirst = Boolean(Math.round(Math.random()))

      if(isUpFirst)
        wordBreak = wordBreak.substring(0, 1).toUpperCase() + wordBreak.substring(1, wordBreak.length)

      let maxLengthWord = wordBreak.length + result.length
      let remainingWords = tamanhoMaximo - result.length

      if(remainingWords <= 0) break

      if(maxLengthWord >= tamanhoMaximo){
        result += wordBreak.substring(0, remainingWords)
        lengthNick = result.length
        break
      } else {
        result += wordBreak
        lengthNick = result.length
      }
    }
  }
  
  result = result.replace(' ', '_')

  return result
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
