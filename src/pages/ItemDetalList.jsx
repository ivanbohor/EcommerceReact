import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import Product from "../components/Product"
import { pedirDatos } from "../helpers/PedirDatos"

    
export const ItemDetailList = () => {
    
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(()=>{

        setLoading(true)

        pedirDatos()
            .then( resp => {
                setItem( resp.find( prod => prod.id === Number(itemId)) )
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [])
    return (
        <div >
            {
                loading
                 ? <h2>Cargando...</h2>
                 : <Product {...item}/>
            }


        </div>
    )
}