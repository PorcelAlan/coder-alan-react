import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';


function App() {
  

  return (
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

          <Route exact path="/carrito/:itemsComprados">
            <Cart />
          </Route>

       </Switch>
    </div>
    </BrowserRouter>
  );

 
}

export default App;



 {/*<ItemDetailContainer />*/}

                {/* <ItemCount initial={0} stock= {5} onAdd= {onAdd} /> */}