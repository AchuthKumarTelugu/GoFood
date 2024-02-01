import React, { createContext, useContext, useReducer } from 'react'
const cartStateContext = createContext()
const cartDispatchContext = createContext()
const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":
            return [...state,{id:action.id,name:action.name,price:action.price,qty:action.qty,img:action.img,size:action.size}]
        case "REMOVE":
            const arr=[...state]
            arr.splice(action.index,1)
            return arr
        case "UPDATE":
            const arr2=[...state]
            arr2.find((value,index)=>{
                if(value.id==action.id) {
                    arr2[index]={...value,qty:parseInt(action.qty)+value.qty,price:value.price+action.price}
                }
                return arr2
            }) 
            return arr2 
        case "DROP":
            let emptyArray=[]
            return emptyArray          
        default:
            console.log('state reducer error')    
    }
}
export default function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <cartStateContext.Provider value={state}>
            <cartDispatchContext.Provider value={dispatch}>
                <div>
                    {children}
                </div>
            </cartDispatchContext.Provider>

        </cartStateContext.Provider>

    )
}
export const useCartState = ()=>useContext(cartStateContext)
export const useCartDispatch = ()=>useContext(cartDispatchContext)
