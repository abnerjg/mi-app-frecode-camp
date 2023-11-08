import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
          <img 
          className='imagen-contenedor'
          src={require(`../imagenes/${props.imagen}.png`)}
          alt='Foto de gmail'/> 
          <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>{props.nombre}</p>
            <p className='cargo-testimonio'>{props.cargo}</p>
            <p className='descripcion-testimonio'>"{props.descripcion}"</p>
          </div>
        </div>
    );
}

export default Testimonio;

