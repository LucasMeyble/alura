import React, { Component } from 'react';
import './style.css'

class ListaCategorias extends Component{

    constructor(){
        super();
        this.state = {categorias:[]}
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    _handleEventoImput(e){
        if(e.key === 'Enter'){
            let valorCategoria = e.target.value;
            this.props.adcionarCategoria(valorCategoria)
        }
    }

    render(){
        return(
            <section className='lista-categorias'>
                <ul className='lista-categorias_lista'>
                    {this.state.categorias.map((categoria, index) => {
                        return <li key={index} className='lista-categorias_item'>{categoria}</li>
                    })}
                    
                </ul>

                <input onKeyUp={this._handleEventoImput.bind(this)} className='lista-categorias_input' type="text" placeholder='AdcionarCategoria'/>
            </section>
        );
    }

}

export default ListaCategorias