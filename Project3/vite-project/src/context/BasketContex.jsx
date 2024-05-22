import { createContext, useState } from "react";

export const BasketContext = createContext()

export const BasketContextProvider = ({children})=>{
    let localbasket= Json.parse(localStorage.getItem("bakset"))
    if(!localbasket){
        localStorage.setItem("basket", Json.Stringify([]))
    }
    let [basket ,setBasket] =useState(localbasket || [])
    return(
        <BasketContext.Provider value={{basket,setBasket}}>
    
            {children}
        </BasketContext.Provider>
    )
}
