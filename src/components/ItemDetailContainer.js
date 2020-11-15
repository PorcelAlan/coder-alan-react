import React, {useEffect, useState} from 'react';
import '../App.css';
import ItemDetail from './ItemDetail.js';
import { useParams } from 'react-router-dom';


function ItemDetailContainer () {
    
    const itemAMostrar = () => {
        return new Promise ((res,rej) => { res(
            [{ name: "Microfono", id: "1", price: "10000", img: "https://www.venex.com.ar/products_images/1584041928_yeti1.jpg"},
            { name: "Martillo", id: "2", price: "400", img: "https://indufer.com.ar/wp-content/uploads/2018/07/martillo-galponero-stanley-mango-de-fibra-profesional-51071-D_NQ_NP_960100-MLA27180556418_042018-F-1.jpg"},
            { name: "Auriculares", id: "3", price: "4000", img: "https://www.perozzi.com.ar/11221-large_default/noganet-auricular-bluetooth-profesional-bt409.jpg"}
            ]  ) 
        })
      }
      
    const[item, setItem] = useState(null);
    const id = useParams().id;
    


   
    

            useEffect(() => {
               
                itemAMostrar().then(items =>
                        setItem(items.filter(item=> item.id === id)[0])
                    )
                },[]);
                
 
                return ( item &&
                    <ItemDetail key={id} item={item}   /> 
                      )

        
    }

export default ItemDetailContainer;




// a.filter(function (pilot) {
  //  setItem(pilot.id===useParams().id);
 // });