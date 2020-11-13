import React, {useEffect, useState, Component, useContext} from 'react';
import ReactDOM from 'react-dom';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import '../App.css';
import ItemCount from '../components/ItemCount';
import BotonFinalizar from '../components/BotonFinalizar';
import {CartContext} from '../context/CartContext';
import { getAllByPlaceholderText } from '@testing-library/react';


function ItemDetail ({item}) {

    const [cantidadItems, setCantidad] = useState();

    const {addItemCart,removeItemCart,clearCart,cart} = useContext(CartContext); 
    
    
    
    useEffect(() => {
       
    },[cantidadItems]);

    const onAdd = (cantidad) => {
        if (cantidad > 0) {
        document.getElementById('itemCounter').style.display = 'none';
        document.getElementsByClassName('botonFinalizar')[0].style.display = 'block';
        setCantidad(cantidad);
        addItemCart(item,cantidad);
    } else {
        alert('No agregaste ningún item.')
    }
    }


    
    return (
        
        <div className='itemDetalle'>
                <p><b>Nombre:</b> {item.name}</p>

                <p><b>Su ID es:</b> {item.id}</p>
                <p><b>Su precio es:</b> {item.price}</p>
                <p><b>Descripción: </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img style={{width: 300, height: 300}} src={item.img} />
                <ItemCount initial={0} stock= {5} onAdd= {onAdd} />
                <BotonFinalizar cantidad={cantidadItems} text={'Finalizar compra'} />
        </div>
    )


}





export default ItemDetail;




