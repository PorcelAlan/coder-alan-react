import React, {useContext, useEffect, useState} from 'react';
import '../App.css';
import CartContextProvider from '../context/CartContext';
import ItemList from './ItemList';
import CartContext from '../context/CartContext';

  
  
  



const itemsAMostrar = () => {
  return new Promise ((res,rej) => { res(
      [{ name: "Microfono", id: "1", price: "10000", img: "https://www.venex.com.ar/products_images/1584041928_yeti1.jpg"},
      { name: "Martillo", id: "2", price: "400", img: "https://indufer.com.ar/wp-content/uploads/2018/07/martillo-galponero-stanley-mango-de-fibra-profesional-51071-D_NQ_NP_960100-MLA27180556418_042018-F-1.jpg"},
      { name: "Auriculares", id: "3", price: "4000", img: "https://www.perozzi.com.ar/11221-large_default/noganet-auricular-bluetooth-profesional-bt409.jpg"}
      ]) 
    })
}

function ItemListContainer ({title}) {

  const[items, setItems] = useState([]);

  const miCarrito = useContext(CartContext);
  console.log(miCarrito); 


      useEffect(() => {
        setTimeout(() => {
        itemsAMostrar().then(items =>
              {   
                
              setItems(items);
              })},1000)
        },[]);


        

        return(
            <div style={{marginTop:100}} className="ItemListContainer">
                <h1  className='tituloHome'>{title} </h1>
                <ItemList ItemsVisibles={items}/> 
            </div>

        )
    }


export default ItemListContainer;




{/*
         
  const itemsAMostrar = () => {
    return new Promise ((res,rej) => { res(
       [ { name: "Microfono", id: "4565", price: "10000", img: "https://www.venex.com.ar/products_images/1584041928_yeti1.jpg"},
              { name: "Martillo", id: "7382", price: "400", img: "https://indufer.com.ar/wp-content/uploads/2018/07/martillo-galponero-stanley-mango-de-fibra-profesional-51071-D_NQ_NP_960100-MLA27180556418_042018-F-1.jpg"},
              { name: "Auriculares", id: "9923", price: "4000", img: "https://www.perozzi.com.ar/11221-large_default/noganet-auricular-bluetooth-profesional-bt409.jpg"}
          ]
          )
      
    })
  }


  */}
 

  {/*
    const [itemsAMostrar, setItems] = useState([])

    useEffect(() => {
        const miPromesa = new Promise ((resolve,reject) => {
            setTimeout(() => {
            resolve(  
              [ { name: "Microfono", id: "4565", price: "10000", img: "https://www.venex.com.ar/products_images/1584041928_yeti1.jpg"},
              { name: "Martillo", id: "7382", price: "400", img: "https://indufer.com.ar/wp-content/uploads/2018/07/martillo-galponero-stanley-mango-de-fibra-profesional-51071-D_NQ_NP_960100-MLA27180556418_042018-F-1.jpg"},
              { name: "Auriculares", id: "9923", price: "4000", img: "https://www.perozzi.com.ar/11221-large_default/noganet-auricular-bluetooth-profesional-bt409.jpg"}
          ])
        }, 1500)  

          }); 
          
          miPromesa.then( result => {
            setItems(result);
          }, 
           );
      },[]);
 */}