import { Button, ButtonGroup, } from "@material-ui/core";
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
import { useState } from "react";
  import styled from "styled-components";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  const ItemCount = styled.div`
  z-index: 3;
 `

  const Product = ({item}) => {

    const [counter, setCounter] = useState(1);

    const incrementar = () => {
      if(item.stock >counter) {  
        setCounter(counter+1)
      }else{
        alert("no hay mas stock")
      }
    }
  
    const decrementar = () => {
      if (counter>1){
        setCounter(counter-1)
      } else{
        alert("no se puede disminuir mas")
      }
    }

    return (
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
        <ItemCount stock={item.stock}>
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button onClick={decrementar}>-</Button>
            <Button onClick={incrementar}>+</Button>
            <h2>{counter}</h2>
          </ButtonGroup>
        </ItemCount>
      </Container>
    );
  };
  
  export default Product;