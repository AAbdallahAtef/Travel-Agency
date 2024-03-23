import React, { createContext, useCallback, useMemo, useState } from 'react';
export const cartContext = createContext()

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [totalAmount,setTotalAmount] = useState(0)
    const addCart = useCallback((newCart)=>{
        setCart([...cart, newCart])
    },[cart])
    const removeFromCart = useCallback((id)=>{
        const newArr = cart.filter((item)=>item.id!==id);
        setCart(newArr)
    },[cart])
    const contextValues=useMemo(()=>({cart,addCart,removeFromCart,totalAmount,setTotalAmount,setCart})
    ,[cart,addCart,removeFromCart,totalAmount,setTotalAmount,setCart])
    return (
        <cartContext.Provider value={contextValues}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;
