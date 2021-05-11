import React, { Component } from 'react';
import CardNota from './CardNota';

class ListaDeNotas extends Component{
    
    render(){
        return(
            <ul>
                {/* eu crio um array e mando os itens por categorias */}
                { Array.of('trabalho', 'trabalho','estudos').map((categorias) => {
                    return (
                        <li>
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