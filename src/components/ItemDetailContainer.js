import React, {useEffect, useState} from 'react';
import '../App.css';
import ItemDetail from './ItemDetail.js';
import { useParams } from 'react-router-dom';
import {getFireStore} from '../Firebase';

function ItemDetailContainer () {


    const db = getFireStore();
    const itemCollection = db.collection("items"); 
    const id = useParams().id;     
    
    const[item, setItem] = useState(null);
    
   

            useEffect(() => {


                itemCollection.get().then((querySnapshot)=>{

                      const miLista = querySnapshot.docs.map(a => a = {id : a.id, ...a.data()});
                      const found = miLista.find(item => item.id === id);
                      setItem(found);   
                  })

                    
                },[]);
                
 
                return ( item &&
                   <div>
                       <ItemDetail key={id} item={item}   /> 
                      <p> </p>
                   </div>
                    
                    )

        
    }

export default ItemDetailContainer;




// a.filter(function (pilot) {
  //  setItem(pilot.id===useParams().id);
 // });


