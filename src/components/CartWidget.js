import React, {useContext} from 'react';
import '../App.css';
import carrito from './img/carritopng.png';
import {CartContext} from '../context/CartContext';

function CartWidget ({itemsCarrito}) {
    const {getCantidadItems} = useContext(CartContext);  

        return(
            <div>
                <img alt="hola" background-color="transparent" className="carrito-img"  src={carrito}   />
                <p> {getCantidadItems()}  </p>
            </div>

        )
    }


export default CartWidget;