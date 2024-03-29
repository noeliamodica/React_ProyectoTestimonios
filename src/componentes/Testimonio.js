import React from 'react';
import '../Stylesheets/Testimonio.css'

function Testimonio (props){
  
  
  return (

    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require (`../images/testimonio-${props.imagen}.png`)}
        alt= 'Foto de Emma'
      /> 

    <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'> 
      <strong>{props.nombre}</strong> in {props.pais} </p>
      <p className='cargo-testimonio'> {props.cargo}  in {props.empresa} </p>
      <p className='texto-testimonio'> "{props.testimonio}" </p>
    </div>

    </div>
  )



}


export default Testimonio