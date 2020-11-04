import React, {useEffect, useState} from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import '../App.css';
import ItemCount from '../components/ItemCount';


function ItemDetail ({item}) {

 

    const onAdd = (cantidad) => {
        {/* const itemsAgregados = cantidad; */}
      alert("Los items añadidos al carrito fueron " + cantidad);
    }


    
    return (
        
        <div className='itemDetalle' style={{marginTop: 100, fontSize: 15}} >
                <p>Nombre: {item.name}</p>
                <p>Su ID es: {item.id}</p>
                <p>Su precio es: {item.price}</p>
                <p>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img style={{width: 300, height: 300}} src={item.img} />
                <ItemCount initial={0} stock= {5} onAdd= {onAdd} />
        </div>
    )


}





export default ItemDetail;




