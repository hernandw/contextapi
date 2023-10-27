import { createContext, useEffect, useState } from "react";


export const ContextProduct = createContext()

const baseUrl = 'https://fakestoreapi.com/products'

export const ProviderProduct = ({ children }) => {
    const [name, setName] = useState('Jose')
    const [products, setProducts] = useState([])



const getData = async () => {
    const response = await fetch(baseUrl)
    const data = await response.json()
    setProducts(data)
    }
    
    useEffect(() => {
        getData()
    }, [])


    return (
        <ContextProduct.Provider value={{ name, setName, products }}>
            {children}
        </ContextProduct.Provider>
    )
}