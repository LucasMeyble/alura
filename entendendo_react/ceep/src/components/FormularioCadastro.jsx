import React, { Component } from 'react';

class FormularioCadastro extends Component{
    render(){
        return(
            
            <form>
                <input type="text" placeholder="Titulo" />
                <textArea placeholder="escreva sua nota" />

                <button>Criar sua nota</button>
            </form>
            
        );
    }
}

export default FormularioCadastro;
