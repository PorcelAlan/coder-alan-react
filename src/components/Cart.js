import React, {useContext, useEffect, useState} from 'react';
import '../App.css';
import {CartContext} from '../context/CartContext';
import { Link } from 'react-router-dom';
import {getFireStore} from '../Firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';


function Cart () {
    const {getCantidadItems, setNewOrder, cart,removeItemCart,clearCart} = useContext(CartContext);  
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [emailConfirmado, setEmailConfirmado] = useState('a');
    const [total, setTotal] = useState();

    async function createOrder() {
        const newOrder = {
            buyer: { name: {name}, phone: {phone}, email: {email} },
            items: cart.map(a=>a),
            date: firebase.firestore.FieldValue.serverTimestamp(),  
            total: {total},
        }; 

        setNewOrder(newOrder);

        const db = getFireStore();
        const orders = db.collection("orders"); 

        const items = db.collectionGroup('items').where('id', '==', (cart.map (a => a.id)));
        items.get().then((querySnapshot)=> {
            console.log(querySnapshot);

        }) 


        try { 
            cart.map(a=> {
                db.collection('items').where(firebase.firestore.FieldPath.documentId(), '==', a.id).get().then((querySnapshot)=> {
                  
                });
                }); 

            const doc = await orders.add(newOrder);
            console.log('Orden creada con ID: ', doc.id);
          
            setNewOrder({id: doc.id, ...newOrder});

        } catch (err){
            console.log('Error creando la orden.');
        }

        
    }

   
    const estiloCajaItemsComprados = {  
        marginTop: 30,
        color: 'black',
        fontSize: 30,
        border: '3px solid black',
        width: 2500,
        height: 130,
        marginLeft: 100,
        marginRight: 0,
    }

    const elementosItemsComprados = {  
        marginLeft: 40,
        display: 'inline',
        marginTop: 14
    }


    const columnasRow = 
    { 
        float: 'left',
    marginTop: 150,
    width: '33%'     }

    

    useEffect(()=> {
        if (cart.length > 0){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        setTotal((cart.map(p => p.price * p.cantidad)).reduce(reducer));}
    },[]);

    

    function confirmarEmail(evt,unCambioDeEstado) {
      if (evt.includes('@')){
        unCambioDeEstado(evt);
      }
    }
    
    

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
                            <b style={elementosItemsComprados}>Precio: </b>{p.price}
                            <img alt="IMG-Producto"style={ {marginLeft: 40, width:100, height: 100}} src={p.img} /> 
                            <b style={elementosItemsComprados}>Valor: </b> {p.cantidad * p.price} 
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
                                 </p> <input onChange={event => setName(event.target.value)} style={{ fontSize: 30,marginLeft: 30, height:50, width:400}} />
                            <p style={{marginTop: 20,fontSize:30}}>Teléfono 
                                 </p> <input type='number' onChange={event => setPhone(event.target.value)} style={{ fontSize: 30,marginLeft: 30, height:50, width:400}} />
                            <p style={{marginTop: 20,fontSize:30}}>Email 
                                 </p> <input onChange={event => {confirmarEmail(event.target.value,setEmail)}} style={{ fontSize: 30, marginLeft: 30, height:50, width:400}} />
                            <p style={{marginTop: 20,fontSize:30}}>Confirmar email 
                                 </p> <input onChange={event => {confirmarEmail(event.target.value,setEmailConfirmado)}} style={{ fontSize: 30, marginLeft: 30, height:50, width:400}} />     
                        </div>

                        <div style={columnasRow}>
                        <button style={{padding: 30, fontSize:40, marginTop:100}} onClick={clearCart}>Limpiar Carrito</button> 
                        {(email===emailConfirmado && name && phone) 
                        ? <div><Link to='/gracias'><button id='botonConfirmar' onClick={createOrder} style={{padding: 30, fontSize:40, marginTop:100}}>Comprar/Checkout</button></Link>
                         <p style={{fontSize:35, paddingTop: 100}}> ¡Ya podés finalizar tu compra! </p> </div>
                        : <div><button id='botonConfirmar' disabled={true} style={{padding: 30, fontSize:40, marginTop:100, color:'grey'}}>Comprar/Checkout</button>
                        <p style={{fontSize:35, paddingTop: 100}}> Te falta completar algunos datos. </p></div>
                        }
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
