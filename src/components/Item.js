import React, {useState} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Item (item) {

 

    const [string] = useState('/item/' + item.id);
    

        return(
            <div  className='ItemClase'>
                <p><b>Nombre:</b> {item.name}</p>
                <p><b>Precio: </b>{item.price}</p>
                <img alt="IMG-Producto" style={{width:300, height: 300}} src={item.img} />
                <Link to={string}> <button style={{padding: 10, marginTop:10}}>Ver detalle</button> </Link>
            </div>

        )
    }


export default Item;