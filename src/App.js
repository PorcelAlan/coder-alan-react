import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './context/CartContext';


function App() {
  

  

  return (
    <CartContextProvider> 
    <BrowserRouter>

    <div className='App'>

        <NavBar />
        <Switch>
          <Route exact path="/"> 
                    <ItemListContainer title="MI LISTA DE PRODUCTOS" />       
          </Route>

          <Route exact path="/otrocomponente/:id">
            <ItemDetailContainer />
          </Route>

          <Route exact path="/carrito/">
            <Cart />
          </Route>

       </Switch>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );

 
}

export default App;

