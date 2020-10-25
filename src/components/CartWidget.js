import React from 'react';
import '../App.css';
import carrito from './img/carritopng.png';


function CartWidget ({itemsCarrito}) {
        return(
            <div>
                <img alt="hola" background-color="transparent" className="carrito-img"  src={carrito}   />
                <p className="itemsCarrito">{itemsCarrito}</p>
            </div>

        )
    }


export default CartWidget;