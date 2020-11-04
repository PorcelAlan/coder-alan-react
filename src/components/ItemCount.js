import React, {useState} from 'react';
import '../App.css';

function ItemCount ({initial, stock, onAdd }) { 
    const [cantidad, setCantidadItems] = useState(initial);

    function sumarItems() {
        if(cantidad<stock){
        setCantidadItems(cantidad+ 1);
        }
      }

      function restarItems() {
        if(cantidad>0){
        setCantidadItems(cantidad- 1);
    }
      }

    return (

    <div className="ItemCount-div">
    <button className="boton-sumar-restar" onClick={restarItems}> -1  </button>
    <button className="boton-cantidad-items"> Cantidad de items ({cantidad})  </button>
    <button className="boton-sumar-restar" onClick={sumarItems}> +1   </button>

   {/* <button onClick={onAdd(initial)}>Añadir al carrito</button> */}
    <button className="boton-agregar" onClick = { ( ) => onAdd(cantidad)}> Agregar </button>

    <div className="stock"> El stock actual es de {stock} items.</div> 
    
   </div>
     );
   }

   export default ItemCount;