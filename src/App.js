import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      
        <NavBar />
        <ItemListContainer title="MI LISTA DE PRODUCTOS" />
        <ItemCount stock="5" />
    </div>

    
  );
}

export default App;
