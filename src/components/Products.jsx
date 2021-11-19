import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Products = () => {
    const [loading, setLoading] = useState(false)
    const [Products, setProducts] = useState([])
    useEffect(() =>{
        setLoading(true)
        Products()
            .then((resp) =>{
                setProducts(resp)
            })
        .catch((error) =>{

        })  
        .finally(() =>{
            setLoading(false)
        })  
    }, [])


  return (
    <Container>
    {  loading
      ? <h2>Cargando...</h2> 
      : <>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      </>}
    </Container>
  );
};

export default Products;
