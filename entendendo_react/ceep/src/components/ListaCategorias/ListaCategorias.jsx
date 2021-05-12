import React, { Component } from 'react';
import './style.css'

class ListaCategorias extends Component{

    _handleEventoImput(e){
        if(e.key == 'Enter'){
            console.log('adcionar categoria')
        }
    }

    render(){
        return(
            <section className='lista-categorias'>
                <ul className='lista-categorias_lista'>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                </ul>

                <input onKeyUp={this._handleEventoImput.bind(this)} className='lista-categorias_input' type="text" placeholder='AdcionarCategoria'/>
            </section>
        );
    }

}

export default ListaCategorias