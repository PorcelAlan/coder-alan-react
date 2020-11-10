import React from 'react';
import '../App.css';
import Item from './Item';



function ItemList (items) {

  const ItemsAMostrar = items.ItemsVisibles;
  
  
        return ItemsAMostrar.map((item,index) => (
              <div className="ItemListClase">
                <Item key={item.id} name={item.name} id={item.id} price={item.price} img={item.img} />
              </div>
        ))}

export default ItemList;




