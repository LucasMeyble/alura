import React, { Component } from 'react';
import CardNota from '../CardNota';
import './style.css'

class ListaDeNotas extends Component{



    render(){
        return(
            <ul className='lista-notas'>
                {/* eu crio um array e mando os itens por categorias */}
                { this.props.notas.map((nota, key) => {
                    return (
                        <li className='lista-notas_item' key={key}>
                            <CardNota/>
                        </li>
                    );
                }) }
            </ul>
        );
    };
}

export default ListaDeNotas;