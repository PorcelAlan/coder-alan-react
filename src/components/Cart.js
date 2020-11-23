import React, {useContext, useEffect, useState} from 'react';
import '../App.css';
import {CartContext} from '../context/CartContext';
import { Link } from 'react-router-dom';
import {getFireStore} from '../Firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';


function Cart () {
    const {getCantidadItems, cart,removeItemCart,clearCart} = useContext(CartContext);  
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();

   

    

    async function createOrder() {
        const newOrder = {
            buyer: { name: {name}, phone: {phone}, email: {email} },
            items: cart.map(a=>a),
            date: firebase.firestore.FieldValue.serverTimestamp(),  
            total: {total},
        }; 


        const db = getFireStore();
        const orders = db.collection("orders"); 

        const items = db.collectionGroup('items').where('id', '==', (cart.map (a => a.id)));
        items.get().then((querySnapshot)=> {
            console.log(querySnapshot);

        }) 


        try { 
            // Esto que intento hacer acá es llegar a los items en Firestore para poder 
            // bajarles la cantidad comprada (stock)
            // pero no lo estoy logrando je, me agarra solo el último

            cart.map(a=> {
                db.collection('items').where(firebase.firestore.FieldPath.documentId(), '==', a.id).get().then((querySnapshot)=> {
                    console.log(querySnapshot);
                });
                }); 

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
        marginLeft: 100,
        marginRight: 0,
        // display: 'grid',
        //gridTemplateColumns: 0.33,
        //gridTemplateRows: 100,
    }

    const elementosItemsComprados = {  
        marginLeft: 40,
        display: 'inline',
        marginTop: 14
    }

    const estiloBoton = {
        marginLeft: 30, 
         fontSize:30,
          marginTop:100,
          width: 300
    }

    const columnasRow = 
    { 
        float: 'left',
    marginTop: 200,
    width: '33%'     }

    const [total, setTotal] = useState();

    useEffect(()=> {
        if (cart.length > 0){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        setTotal((cart.map(p => p.price * p.cantidad)).reduce(reducer));}
    },[]);
    

    if (getCantidadItems() > 0) {
        return(
            <div style={{ marginBottom:200}}>
                <h1 className="carrito"> Este es mi carrito </h1>
                <h2> Los items comprados fueron </h2> 
                
                {cart.map(p => 
                    <div style={estiloCajaItemsComprados}>
                        <p style={elementosItemsComprados}> 
                            <b>Nombre: </b> {p.name}
                            <b style={elementosItemsComprados}>Cantidad: </b> {p.cantidad}
                            <p  style={elementosItemsComprados}><b>Precio: </b>{p.price} </p>
                            <img alt="IMG-Producto"style={ {marginLeft: 40, width:100, height: 100}} src={p.img} /> 
                            <p style={elementosItemsComprados}><b>Valor: </b> {p.cantidad * p.price} </p>
                            <button onClick={() => {removeItemCart(p); setTotal(total - p.cantidad * p.price) } } style={elementosItemsComprados}>Quitar</button>
                        </p>   
                    </div> 
                        )}
                    
                    
                    <div style={{display: 'inline-block'}}> 

                        <div style={columnasRow}>
                            <p style={{fontSize:35, paddingTop: 100}}><b> Hasta ahora el total de tu compra es de {total} pesos. </b></p>
                        </div>

                        <div style={columnasRow}>
                            <h1 style={{marginBottom: 30}}> Completá tus datos</h1>
                            <p style={{marginTop: 20,fontSize:30}}>Nombre 
                                 </p> <input onChange={event => setName(event.target.value)} style={{ marginLeft: 30, height:50, width:400}} />
                            <p style={{marginTop: 20,fontSize:30}}>Teléfono 
                                 </p> <input onChange={event => setPhone(event.target.value)} style={{ marginLeft: 30, height:50, width:400}} />
                            <p style={{marginTop: 20,fontSize:30}}>Mail 
                                 </p> <input onChange={event => setEmail(event.target.value)} style={{ marginLeft: 30, height:50, width:400}} />
                        </div>

                        <div style={columnasRow}>
                        <button style={estiloBoton} onClick={clearCart}>Limpiar Carrito</button> 
                        <button onClick={createOrder} style={estiloBoton}>Comprar/Checkout</button>
                        </div>

                    </div>

                

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




{/* 
       async function createOrder() {
        debugger;
        const newOrder = {
            buyer: { name: 'Poli', phone: '+541143432323', email: 'asd@asd' },
            items: [
                { id: '1', title: 'zapas', price: 200, quantity: 2 },
                { id: '2', title: 'gorro', price: 100, quantity: 1 },
            ], // cart.map(c => ({}))
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: 500,
        };
        const db = getFirestore();
        const orders = db.collection("orders");
        try {
            const doc = await orders.add(newOrder);
            console.log('Order created with id: ', doc.id);
            // Update stock
            const itemQueryByManyId = await db.collection("items")
            .where(firebase.firestore.FieldPath.documentId(), 
            'in', cart.map(c => c.item.id) )
            .get();
            const [item] = itemQueryByManyId.docs;
            await item.ref.update({ stock: item.data().stock - 1 });
            // guadar el id en algun estado para mostrarselo
            // al user
        } catch (err) {
            console.log('Error creating order');
        }
    } */}