"use client"
import { fetchProduct } from "@/lib/api";
import { useEffect, useState } from "react"

interface Product   {
  id: number;
  product_id: number;
  capacity_id: number;
  color_id: number;
  part_number_id: number;
  active_status_id: number;
  price: number;
  discount_price: number;
  stock: number;
}


const Test = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(()=>{
      async function loadProduct (){
        try{
          const data = await fetchProduct()
          setProducts(data)
        console.log(data)
        }catch (error){
          console.log((error as Error).message)
        }
      }
      loadProduct()
  },[])

  if (error) return <div>Error: {error}</div>;
  if (!products.length) return <div>Loading...</div>;
  return <div className="font-bold">test465466</div>
}
export default Test
