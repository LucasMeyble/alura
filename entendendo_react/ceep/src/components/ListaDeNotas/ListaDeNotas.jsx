import React, { Component } from 'react';
import CardNota from '../CardNota';
import './style.css'

class ListaDeNotas extends Component{

    constructor(){
        super();
        this.state = {notas:[]}
    }

    componentDidMount(){
        this.props.notas.inscrever(this._novasNotas.bind(this));
    }

    _novasNotas(notas){
        this.setState({...this.state, notas})
    }

    render(){ 
        return(
            <ul className='lista-notas'>
                {/* eu crio um array e mando os itens por categorias */}
                { this.state.notas.map((nota, index) => {
                    return (
                        <li className='lista-notas_item' key={index}>
                            <CardNota 
                                indice={index}
                                apagarNota={this.props.apagarNota}
                                titulo={nota.titulo} 
                                texto={nota.texto}
                                categoria={nota.categoria}    
                            />
                        </li>
                    );
                }) }
            </ul>
        );
    };
}

export default ListaDeNotas;