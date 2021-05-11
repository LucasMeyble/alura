import React, { Component } from 'react';
import CardNota from './CardNota/CardNota';

class ListaDeNotas extends Component{
    
    render(){
        return(
            <ul>
                {/* eu crio um array e mando os itens por categorias */}
                { Array.of('trabalho', 'trabalho','estudos').map((categorias, key) => {
                    return (
                        <li key={key}>
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