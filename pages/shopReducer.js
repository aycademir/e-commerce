import Cookies from "js-cookie";


export const initialState= {
    total: 0,
    products: Cookies.get("products")
        ? JSON.parse(Cookies.get("products"))
        : [],
   
}


const shopReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'ADD_TO_CART':
            console.log("ADD_TO_CART", payload);
            return {
                ...state,
                products: payload.products
            }
        case 'REMOVE_FROM_CART':
            console.log("REMOVE_FROM_CART", payload);
            return {
                ...state,
                products: payload.products
            }
        case 'UPDATE_PRICE':
            console.log("UPDATE_PRICE", payload);
            return {
                ...state,
                total: payload.total
            }

        case 'INCREMENT_COUNT':
            console.log("INCREMENT_COUNT", payload);
            return {
                ...state,
                products: payload.products
            }

        case 'DECREASE_COUNT':
            console.log("DECREASE_COUNT", payload);
            return {
                ...state,
                products: payload.products
            }

        default:
            throw new Error(`No cases for type ${type} for in shop reducer`)
    }
}

export default shopReducer;