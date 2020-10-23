import React, {useState, useEffect} from 'react';
import '../App.css';

function ItemCount ({ stock }) { 
    const [initial, setCantItems] = useState(0);

    function sumarItems() {
        if(initial<stock){
        setCantItems(initial+ 1);
        }
      }

      function restarItems() {
        if(initial>0){
        setCantItems(initial- 1);
    }
      }

    return (

    <div className="ItemCount-div">
    <button className="boton-sumar-restar" onClick={restarItems}> -1  </button>
    <button className="boton-cantidad-items"> Cantidad de items ({initial})  </button>
    <button className="boton-sumar-restar" onClick={sumarItems}> +1   </button>

    <div className="stock"> El stock actual es de {stock} items.</div> 
    
   </div>
     );
   }

   export default ItemCount;