import React from 'react';
import { ListaDeNotas } from './components/ListaDeNotas'

function App() {
  return (
    <>
      <form>
        <input type="text" placeholder="Titulo" />
        <textArea placeholder="escreva sua nota" />

        <button>Criar sua nota</button>
      </form>

      <ListaDeNotas></ListaDeNotas>
    </>
  );
}

export default App;
