import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import cartReducer from "../features/cartSlice";

import logger from "redux-logger"

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    },
    middleware: (getDefualtMiddleware) => getDefualtMiddleware().concat(logger)
})

export default store