
import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { ItemCount } from "../components/ItemCount";
import Navbar from "../components/Navbar";
import { pedirDatos } from "../helpers/pedirDatos";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;
const ItemDetailContainer = () => {
const [item,setItem] = useState({})
const [loading, setLoading] = useState(false)
const { itemId } = useParams()

  useEffect(()=>{
    setLoading(true) 
    pedirDatos() 
    .then((response) =>
    {setItem(response.find(prod=> prod.id === Number(itemId))) 
    }) 
    .finally(()=>{
      setLoading(false)})   
   }, [itemId])
  return (
    <Container>
    <Wrapper>
      <ImgContainer>
        <Image src={item.img} />
      </ImgContainer>
      <InfoContainer>
        <Title>{item.name}</Title>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum ac, volutpat ornare.
        </Desc>
        <Price>$ {item.price}</Price>
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="darkblue" />
            <FilterColor color="gray" />
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddContainer>
        <ItemCount max={item.stock}  />
          <Button>Agregar al Carrito</Button>
        </AddContainer>
      </InfoContainer>
    </Wrapper>
  </Container>
  );
};
export default ItemDetailContainer;


