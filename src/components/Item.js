import React from 'react';
import '../App.css';


function Item (item) {
        return(
            <div className='ItemClase'>
                <p>Nombre: {item.name}</p>
                <p>ID: {item.id}</p>
                <p>Price: {item.price}</p>
                <img style={{width: 100, height: 100}} src={item.img} />
            </div>

        )
    }


export default Item;