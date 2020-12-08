import React, {useEffect, useState, useContext} from 'react';
import '../App.css';
import ItemCount from '../components/ItemCount';
import BotonFinalizar from '../components/BotonFinalizar';
import {CartContext} from '../context/CartContext';


function ItemDetail ({item}) {

    const [cantidadItems, setCantidad] = useState();

    const {addItemCart} = useContext(CartContext); 
    
    
    
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

                <p><b>Su precio es:</b> {item.price}</p>
                <p><b>Descripción: </b> {item.descripcion} </p>
                <img alt="IMG-Producto" style={{width: 300, height: 300}} src={item.img} />
                <ItemCount initial={0} stock= {item.stock} onAdd= {onAdd} />
                <BotonFinalizar cantidad={cantidadItems} text={'Ir al carrito'} />
        </div>
    )


}





export default ItemDetail;



