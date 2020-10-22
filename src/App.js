import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      
        <NavBar />
        <ItemListContainer title="MI LISTA DE PRODUCTOS" />
        
    </div>

    
  );
}

export default App;
