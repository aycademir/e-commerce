import { createContext, useReducer, useContext, useState } from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState);

export const ShopProvider = ({children}) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);

    const addToCart = (product) => {

        const updatedCart = state.products;
        for (let idx=0; idx < updatedCart.length; idx ++) {
            console.log("sgdh");
            if (updatedCart[idx].id === product.id) {
                updatedCart[idx].count += product.count;
                    break;
            }
        }
        const exists = updatedCart.some((item) => item.id=== product.id)
        console.log(exists, "123456");
        if (!exists){
            updatedCart.push(product)
        }
        
        
        
        
        updatePrice(updatedCart);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCart
            }
        })
    }

    const removeFromCart = (product) => {
        const updatedCart = state.products.filter((currentProduct) => currentProduct.name !== product.name)
       
        updatePrice(updatedCart);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCart
            }
        })
    }


    const updatePrice = (products) => {
        let total = 0

        products.forEach((product) => total+=product.price*(product.count));

        dispatch({
            type: "UPDATE_PRICE",
            payload: {
                total
            }
        })
    }

    const incrementCount = (product) => {
        const newCart = state.products;
        for (let idx = 0; idx < newCart.length; idx ++) {
            if (newCart[idx].id === product.id) {
                newCart[idx].count = product.count;
                break;
            }
           }
     
        updatePrice(newCart);

        dispatch({
            type: "INCREMENT_COUNT",
            payload: {
                products: newCart,
            }
        })
    }

    const decreaseCount = (product) => {

        const newCart = state.products;
        for (let idx = 0; idx < newCart.length; idx ++) {
            if (newCart[idx].id === product.id) {
                newCart[idx].count = product.count;
                break;
            }
        }

        updatePrice(newCart);
        dispatch({
            type: "DECREASE_COUNT",
            payload: {
                products: newCart,
            }
        })
    }

    const value = {
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart,
        incrementCount,
        decreaseCount
    }

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}



const useShop = () => {
    const context = useContext(ShopContext)

    if (context === undefined) {
        throw new Error("useShop must be used within ShopContext")
    }

    return context
}

export default useShop