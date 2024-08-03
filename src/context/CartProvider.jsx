import React, { createContext, useContext, useReducer } from 'react'
import { sumProducts } from '../helpers/helper';

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
};

const reducer = (state, action) => {
    console.log(state.selectedItems);
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({ ...action.payload, quantity: 1 })
            }

            return {
                ...state,
                ...sumProducts(state.selectedItems),
                checkout: false
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(i => i.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumProducts(newSelectedItems)
            }
        case "INCREASE_ITEM":
            const increaseIndex = state.selectedItems.findIndex(i => i.id === action.payload.id);
            state.selectedItems[increaseIndex].quantity++;

            return {
                ...state,
                ...sumProducts(state.selectedItems)
            }

        case "DECREASE_ITEM":
            const decreaseIndex = state.selectedItems.findIndex(i => i.id === action.payload.id);
            state.selectedItems[decreaseIndex].quantity--;

            return {
                ...state,
                ...sumProducts(state.selectedItems)
            }

        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }

        default:
            throw new Error("Invalid Action!")
    }
};

const CartContext = createContext()

function CartProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    const { state, dispatch } = useContext(CartContext);
    return [state, dispatch]
}

export default CartProvider
export { useCart }