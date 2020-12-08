import React, {useContext,useEffect} from 'react';
import '../App.css';
import {CartContext} from '../context/CartContext';

function ThankYouPage (children) {

    const {getNewOrder,clearCart} = useContext(CartContext);  
    
    

    useEffect(()=>
    {
        clearCart();
    },[])

    
    const columnasRow = 
    { 
        marginTop: 200,
        fontSize: 45,
        lineHeight: 2   }



    if (getNewOrder()!==undefined){
        return (<div> 
            <p style={columnasRow}> ¡GRACIAS <b>{getNewOrder().buyer.name.name}</b>! <br></br>
            Compraste <b><ul>{getNewOrder().items.map(p=><li>{p.cantidad} {''} {p.name}</li>)}</ul></b><br></br>
            El costo final fue de <b>{getNewOrder().total.total}</b> pesos argentinos.  <br></br>
            El ID de tu compra es <b>{getNewOrder().id}</b> </p>
            <div> {getNewOrder().items.map(p=>
               <img alt="IMG-Producto" style={{width:300, height: 300}} src={p.img} /> )}  
            </div>
            
            
            
                
                
                </div>)
    } else {
        return (
           <div>
               <h1 className='carrito'> No compraste nada aún.</h1>
           </div> 
        )
    }
    
}
   export default ThankYouPage;