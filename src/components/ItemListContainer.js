import React, {useEffect, useState} from 'react';
import '../App.css';
import ItemList from './ItemList';
import {getFireStore} from '../Firebase';
import { useParams } from 'react-router-dom';
  


function ItemListContainer ({title}) {
  const[items, setItems] = useState([]);
  const db = getFireStore();
  const itemCollection = db.collection("items");
  const categoria = useParams().categoria;
  
  


      useEffect(() => {
        if (categoria === undefined){
                itemCollection.get().then((querySnapshot)=>{
                  if (querySnapshot.size === 0){ 
                    console.log('no results!');
                  } else {
                    setItems(querySnapshot.docs.map(a => a = {id : a.id, ...a.data()}));
                  }
                })
          } else {
                const miCategoria = itemCollection.where('type','==', categoria);

                miCategoria.get().then((querySnapshot) => {
                  if (querySnapshot.size === 0){
                    alert('no items');
                  } else {
                  setItems(querySnapshot.docs.map(a => a = {id : a.id, ...a.data()}));}
                })
                }
              },[categoria,itemCollection]);


        return(
            <div style={{marginTop:100}} className="ItemListContainer">
                <h1 style={{fontFamily: "Helvetica"}} className='tituloHome'>{categoria} </h1>
                <ItemList ItemsVisibles={items}/> 
            </div>

        )
    }


export default ItemListContainer;



