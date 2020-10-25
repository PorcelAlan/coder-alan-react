import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  
  const onAdd = (cantidad) => {
    {/* const itemsAgregados = cantidad; */}
  alert("Los items añadidos al carrito fueron " + cantidad);
}

  return (
    

    <div className="App">
        <NavBar />
        <ItemListContainer title="MI LISTA DE PRODUCTOS" />
        <ItemCount initial={0} stock= {5} onAdd= {onAdd} />
    </div>

  );

 
}

export default App;
