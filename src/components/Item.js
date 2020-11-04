import React, {useEffect, useState} from 'react';
import '../App.css';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ItemDetail from './ItemDetail.js';
import { Link } from 'react-router-dom';


function Item (item) {

  {/*  const onVerDetalle = () => {
        return ItemDetail(this);
        {/* const itemsAgregados = cantidad; 
      console.log(item.id);
    }
*/}
     const [string, setString] = useState('/otrocomponente/' + item.id);

        return(
            <div className='ItemClase'>
                <p>Nombre: {item.name}</p>
                <p>ID: {item.id}</p>
                <p>Price: {item.price}</p>
                <img style={{width: 100, height: 100}} src={item.img} />
                <Link to={string}> <button>Ver detalle</button> </Link>
            </div>

        )
    }


export default Item;