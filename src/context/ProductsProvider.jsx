import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/axios-config';

const ProductsContext = createContext();

function ProductsProvider({ children }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setProducts(await api.get("/products"))
            } catch (error) {
                console.log;
            }
        }
        fetchProducts()
    }, []);

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}

const useProducts = () => {
    const products = useContext(ProductsContext);
    return products
}

const useProductDetails = (id) => {
    const products = useContext(ProductsContext);
    const result = products.find(p => p.id === +id);
    return result
}

export default ProductsProvider
export { useProducts, useProductDetails }