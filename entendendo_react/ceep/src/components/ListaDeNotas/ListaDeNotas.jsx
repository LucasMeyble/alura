import React, { Component } from 'react';
import CardNota from '../CardNota/CardNota';
import './style.css'

class ListaDeNotas extends Component{
    
    render(){
        return(
            <ul className='lista-notas'>
                {/* eu crio um array e mando os itens por categorias */}
                { Array.of('trabalho', 'trabalho','estudos').map((categorias, key) => {
                    return (
                        <li className='lista-notas_item' key={key}>
                            <div>{categorias}</div>
                            <CardNota/>
                        </li>
                    );
                }) }
            </ul>
        );
    };
}

export default ListaDeNotas;