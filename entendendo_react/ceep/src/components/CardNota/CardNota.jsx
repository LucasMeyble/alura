import React, { Component } from 'react';
import './style.css'

class CardNota extends Component {

    render(){
        return(
            <section className='card-nota'>
                <header>
                    <h3>titulo</h3>
                </header>
                <p>Escreva sua nota</p>
            </section>
        );
    }

}
export default CardNota;