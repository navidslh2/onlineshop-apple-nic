import type { Product } from "./types";

export async function fetchProduct() : Promise<Product[]>{
    try{
        const res = await fetch("api/products")
        if (!res.ok) throw new Error("fail to fetch")
        const data:Product[] = await res.json()
        return data
    }catch(error){
        throw new Error ((error as Error).message)
    }
}