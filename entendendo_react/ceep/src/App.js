import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaCategorias from './components/ListaCategorias';
import Categorias from './dados/Categorias';
import ArrayNotas from './dados/ArrayNotas';
import './assets/App.css';
import './assets/index.css';

class App extends Component{

  constructor(){
    super()
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  render(){
    return (
      <section className='conteudo'>
        <FormularioCadastro categorias={this.categorias.categorias} criarNota={this.notas.adicionarNota}/>
        <main className='conteudo-principal'>
        <ListaCategorias
          adcionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          categorias={this.categorias}/>
        <ListaDeNotas 
          apagarNota={this.notas.deletarNota}
          notas={this.notas.notas}/>
        </main>
      </section>
    );
  }
}

export default App;