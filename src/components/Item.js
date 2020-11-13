import React, {useEffect, useState, useContext} from 'react';
import '../App.css';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ItemDetail from './ItemDetail.js';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

function Item (item) {

  {/*  const onVerDetalle = () => {
        return ItemDetail(this);
        {/* const itemsAgregados = cantidad; 
      console.log(item.id);
    }
*/}

   function setItem(cantidad) {
       item.cantidad = cantidad;
   }

     const [string, setString] = useState('/otrocomponente/' + item.id);
    

        return(
            <div className='ItemClase'>
                <p><b>Nombre:</b> {item.name}</p>
                <p><b>ID:</b> {item.id}</p>
                <p><b>Price: </b>{item.price}</p>
                <img style={{width:300, height: 300}} src={item.img} />
                <Link to={string}> <button style={{padding:10}}>Ver detalle</button> </Link>
            </div>

        )
    }


export default Item;