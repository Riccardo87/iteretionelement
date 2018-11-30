import React, { Component } from 'react';
import './App.css';
import Iteration from './components/iteration/Iteration'

const politics = [{
  id: 1,
  avatar: require ('./images/barney.png'),
  nome: 'Barney',
  cognome: 'Stinson',
  partito: 'Leggen pause Dario',
},

{
  id: 2,
  nome: 'Manes',
  cognome: 'Bernardini',
  partito: 'Insieme Bologna',
},

{
  id: 3,
  nome: 'Maccio',
  cognome: 'Capatonda',
  partito: 'Partito della Figa',
}]



class App extends Component {
  render() {
    return (
      <div className="App">
        <Iteration myArray={politics} titolo={'lista dei politici delle prossime elezioni del mondo'} />
      </div>

    );
  }
}

export default App;
