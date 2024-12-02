import { createContext,useContext,useEffect,useState } from "react";
import axios from "axios";

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("https://mocki.io/v1/42f4fc34-9c26-4020-abd2-99630eed0d02")
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
                console.log(res.data)
            })
    }, [])



    return <ProductContext.Provider value={[products, setProducts]}>{children}</ProductContext.Provider>
}