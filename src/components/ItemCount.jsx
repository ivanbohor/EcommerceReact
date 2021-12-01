import { Button, ButtonGroup } from '@material-ui/core';
import React, { useState } from 'react'


export const ItemCount = ({max}) => {

    const [counter, setCounter] = useState(1);

    const incrementar = () => {
      if(max >counter) {  
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
        <div>
        <ItemCount>
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button onClick={decrementar}>-</Button>
            <Button onClick={incrementar}>+</Button>
            <h2>{counter}</h2>
          </ButtonGroup>
        </ItemCount>
        </div>
    )
}
