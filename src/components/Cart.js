import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';


function Cart () {

    const itemsComprados = useParams().itemsComprados;
    console.log(itemsComprados);

        return(
            <div>
                <h1 className="carrito"> Este es mi carrito </h1>
                <h2> Los items comprados fueron {itemsComprados} </h2>
            </div>

        )
    }


export default Cart;