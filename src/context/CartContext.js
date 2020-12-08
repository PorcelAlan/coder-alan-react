import React, { useState } from 'react';

export const CartContext = React.createContext([]);

// export function useCartContext = () => useContext(CartContext);

 export default function CartContextProvider ({defaultValue= [], children}) {

    const [cart, setCart] = useState([]);
    const [cantidadItems,setCantidadItems] = useState(0); 
    const [unaNuevaOrden, setUnaNuevaOrden] = useState();


    function addItemCart (Item, cantidad) {
        
  
        const setItem = () => {Item.cantidad = cantidad};
        setItem(cantidad);

        if (cart.filter(p => p.id === Item.id).length === 0) {
            setCart([...cart, Item]);
            setCantidadItems(cantidadItems + cantidad);
            } else {
                const nuevoCart = [...cart];
                nuevoCart.find(p => p.id === Item.id).cantidad = nuevoCart.find(p => p.id === Item.id).cantidad+cantidad;
                setCart(nuevoCart);
                setCantidadItems(cantidadItems + cantidad);
            }

    }

    function setNewOrder(unaOrden) {
       setUnaNuevaOrden(unaOrden);
    }

    function getNewOrder(){
        return unaNuevaOrden;
    }

    function getCantidadItems() {
        return cantidadItems;
    }



    function removeItemCart (Item) {
        setCantidadItems(cantidadItems-Item.cantidad);
        cart.splice(cart.indexOf(Item), 1);
        console.log('removido');  
    }

    function clearCart (idItem) {
        setCantidadItems(0);
        setCart([]);
    }

    return <CartContext.Provider value={{getCantidadItems, getNewOrder, setNewOrder, addItemCart,removeItemCart,clearCart,cart}}>

            {children}

    </CartContext.Provider>



}