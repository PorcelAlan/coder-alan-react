import React from 'react';
import '../App.css';
import ItemList from './ItemList';


{/* const itemTask = Promise() */}


function ItemListContainer ({title}) {

    
      



 


{/* const miPromesa = new Promise ((resolve,reject) => {
    resolve(  
      [{id: 'Harper', name: 'Perez', description: 'Esto es...', stock: 3}, 
       {id: 'Alan', name: 'Porcel', description: 'Esto es...', stock: 3}]);
  }); 
  
  miPromesa.then( result => {
    setTimeout(() => {console.log(result); }, 1500)
  }); */}

  const itemsAMostrar = [
    { name: "Microfono", id: "4565", price: "10000", img: "https://www.venex.com.ar/products_images/1584041928_yeti1.jpg"},
    { name: "Martillo", id: "7382", price: "400", img: "https://indufer.com.ar/wp-content/uploads/2018/07/martillo-galponero-stanley-mango-de-fibra-profesional-51071-D_NQ_NP_960100-MLA27180556418_042018-F-1.jpg"},
    { name: "Auriculares", id: "9923", price: "4000", img: "https://www.perozzi.com.ar/11221-large_default/noganet-auricular-bluetooth-profesional-bt409.jpg"}
]; 
 

        return(
            <div style={{marginTop:100}} className="ItemListContainer">
                <h1  style={{color: 'red'}}>{title} </h1>
                <ItemList ItemsVisibles={itemsAMostrar}/> 
            </div>

        )
    }


export default ItemListContainer;






