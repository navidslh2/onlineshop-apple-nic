import { fetchRating } from "@/lib/api";
import type { Rating } from "@/lib/types";
import React, {  createContext, useEffect, useReducer, useState } from "react";



type RatingAction =  {type:"FETCH"; payload: Rating[]} | {type:"FILTER", payload:number}

interface RatingContextType {
    rating:Rating[]
    dispatch: React.Dispatch<RatingAction>
}

export const RatingContext = createContext<RatingContextType | null>(null)

function ratingreducer(state:Rating[],action:RatingAction): Rating[]{
    switch (action.type){
        case "FETCH":
            return action.payload
        case "FILTER":
            return state.filter(r => r.productItemId === action.payload)
        default:
            return state
    }
}

const RatingProvider = ({children}:{children: React.ReactNode})=>{
    const [rating, dispatch] = useReducer(ratingreducer,[])
    useEffect(()=>{
        const loadRating = async()=>{
            try{
               const data = await fetchRating()
               dispatch({type:"FETCH",payload: data})
            }catch(error){
                console.log(error)
            }
        }
        loadRating()
    },[])

    return (
        <RatingContext.Provider value={{rating, dispatch}}>
            {children}
        </RatingContext.Provider>
    )
}

export default RatingProvider