import React, { Component } from 'react';
import './style.css'
class FormularioCadastro extends Component{

    constructor(){
        super();
        this.titulo='';

    }

    handleMudancaTitulo(evento){
        this.titulo = evento.target.value;
        console.log(this.titulo);
    }
    
    render(){
        return(
            <form className='form-cadastro'>
                <input 
                    className='form-cadastro_input' 
                    type="text" 
                    placeholder="Titulo"
                    onChange={this.handleMudancaTitulo}
                />
                <textArea 
                    rows={15} 
                    className='form-cadastro_input' 
                    placeholder="escreva sua nota" 
                />

                <button className='form-cadastro_input form-cadastro_submit'>
                    Criar sua nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;
