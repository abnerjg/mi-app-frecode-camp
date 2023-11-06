import React from 'react';

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
          <img 
          className='imagen-contenedor'
          src={require('../imagenes/gmail.png')}
          alt='Foto de gmail'/> 
          <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>Gmail</p>
            <p className='cargo-testimonio'>Envio Mensajes</p>
            <p className='descripcion-testimonio'>Ayudo a enviar correos a miles de usuarios</p>
          </div>
        </div>
    );
}

export default Testimonio;

