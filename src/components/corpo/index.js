import React from 'react';
import ReactDOM from 'react-dom';
import CriarObjetos from '../nick';
import './styles.css';

function Corpo(prop)
{
  return(
    <div className = 'container-fluid bg-dark text-white corpo'>
      <p>
      Insira a quantidade de nomes a gerar
      </p>
      <div className = 'area-input'>
        <input name = 'quantidade' type = 'text' className = 'form-control' id = 'input-qtd' placeholder = 'Quantidade' />
        <span className = 'espaco'></span>
        <button className = 'button' type = 'button' onClick = {function (){
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

export default Corpo;
