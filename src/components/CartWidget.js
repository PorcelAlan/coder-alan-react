import React from 'react';
import '../App.css';
import carrito from './carritopng.png';


function CartWidget () {
        return(
            <div>
                <img alt="hola" background-color="transparent" className="carrito-img"  src={carrito} />

            </div>

        )
    }


export default CartWidget;