import React, {useContext, useEffect, useState} from 'react';
import '../App.css';
import {CartContext} from '../context/CartContext';
import { Link } from 'react-router-dom';
import {getFireStore} from '../Firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';


function Cart () {
    const {getCantidadItems, cart,removeItemCart,clearCart} = useContext(CartContext);  





    async function createOrder() {
        const newOrder = {
            buyer: { name: 'Poli', phone: '+541143432323', email: 'asd@asd' },
            items: [
                {id: 'pepe'}
               // cart.map(p => {
                 //   return p;
                // })
            ],
            date: firebase.firestore.FieldValue.serverTimestamp(),  
            total: 500,
        }; 

    

        const db = getFireStore();
        const orders = db.collection("orders"); 

        try { 
            const doc = await orders.add(newOrder);
            console.log('order created with id: ', doc.id);
        } catch (err){
            console.log('error creating order');
        }

        
    }


  
    

    const estiloCajaItemsComprados = {  
        marginTop: 30,
        color: 'black',
        fontSize: 30,
        border: '3px solid black',
        width: 1500,
        height: 130,
        display: 'block',
        marginLeft: 100
    }
    const elementosItemsComprados = {  
        marginLeft: 40,
        display: 'inline',
        marginTop: 14
    }

    const [total, setTotal] = useState();

    useEffect(()=> {
        if (cart.length > 0){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        setTotal((cart.map(p => p.price * p.cantidad)).reduce(reducer));}
    },[]);
    

    if (getCantidadItems() > 0) {
        return(
            <div style={{marginBottom:200}}>
                <h1 className="carrito"> Este es mi carrito </h1>
                <h2> Los items comprados fueron </h2> 
                
                {cart.map(p => <div style={estiloCajaItemsComprados}><p style={elementosItemsComprados}> 
                <b>Nombre: </b> {p.name}
                <b style={elementosItemsComprados}>Cantidad: </b> {p.cantidad}
                <p  style={elementosItemsComprados}><b>Precio: </b>{p.price} </p>
                <img alt="IMG-Producto"style={ {marginLeft: 40, width:100, height: 100}} src={p.img} /> 
                <p style={elementosItemsComprados}><b>Valor: </b> {p.cantidad * p.price} </p>
                
                <button onClick={() => {removeItemCart(p); setTotal(total - p.cantidad * p.price) } } style={elementosItemsComprados}>Quitar</button>
                 </p></div> 
                 
                 ) }
                    <p style={{fontSize:50, marginTop:100}}>Total {total} </p>
                 <button style={{marginLeft: 30, fontSize:30, marginTop:100}} onClick={clearCart}>Limpiar Carrito</button> 
                 <button onClick={createOrder} style={{marginLeft: 30, fontSize:30, marginTop:100}}>Comprar/Checkout</button>
            </div>
        )}  
        
        if (getCantidadItems() === 0) {
        return <div> <h1 className="carrito"> ¡Aún no comprate nada! </h1> 
        <Link to='/'> <button style={{padding: 30, fontSize:40, marginTop:100}}>Quiero ver productos</button></Link>
        
        
         </div>
        }   
}


export default Cart;

// <img style={{width:300, height: 300}} src={p.img} />


{/* 
 function createOrder() {
    const newOrder = {
        buyer: { name: 'Poli', phone: '+541143432323', email: 'asd@asd' },
        items: [
            { id: '1', title: 'zapas', price: 200, quantity: 2 },
            { id: '2', title: 'gorro', price: 100, quantity: 1 },
        ],
        total: 500,
    };
}


const itemQueryByManyId = await db.collection("items")
        .where(firebase.firestore.FieldPath.documentId(), 
        'in', cart.map(c => c.item.id) )
        .get();
const res = await item.ref.update({ stock: item.data().stock - 1 });


*/}


// items.docs.map(d => ({ ...d.data(), id: d.id })).map(({ id, title, price, stock }) => ({ id, title, price, stock } ) )


// const itemQueryByManyId = await db.collection("items")
   //     .where(firebase.firestore.FieldPath.documentId(), 
     //   'in', ['Q0VfIIoYzn6Lpc2FBQUg', 'iEuV6tEihe7345pKDL7A'] )
       // .get();
