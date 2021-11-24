import { Add, Remove } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Item } from "./Item";



export default function ItemDetailContainer(props) {
  const [items, setItems] = useState(false);

  useEffect((async) => {
    fetch('https://5f3c95f36c11f80016d6f21e.mockapi.io/saboritech/items')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return <div>{items !== false ? 
    
    items.map((producto, i)=>(
      <Item 
        nombre={producto.nombre} 
        precio={producto.precio} 
        descripcion={producto.descripcion}/>
    ))
      
      : 
    
    'Cargando'}</div>;
}


