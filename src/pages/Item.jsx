import React from 'react';

export const Item = ({ nombre, precio, descripcion }) => {
  return (
    <div
      className="item"
      style={{
        paddingLeft: '5vw',
        textAlign: 'left',
      }}
    >
      <h6>{nombre}</h6>
      <li>Precio: {precio}</li>
      <p>{descripcion}</p>
      <hr></hr>
    </div>
  );
};