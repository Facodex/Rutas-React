import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const PersonaComponent = () => {
    
    let {nombre, apellido} = useParams()

    const navegar = useNavigate();
    let [usuarioValido, getUsuarioValido] = useState(false);

    const getData = (e) =>{
        e.preventDefault();

        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;
        let url = `/persona/${nombre}/${apellido}`;

        if(nombre.length >= 1){
            navegar(url);
            getUsuarioValido(false);
        }else{
            getUsuarioValido(true);
        }
    }


  return (
    <div>
        {!nombre && <h2>No hay ninguna persona que mostrar, ve a formulario y busca una persona</h2>}
        {nombre && <h2>Has decidido visitar la pagina de : {nombre} {apellido}</h2>}

        <h1>Visita a una persona</h1> 
        {usuarioValido && <h2>Introduce un usuario valido</h2>}
        <form onSubmit={getData}>
            <input type='text' name='nombre' placeholder='nombre'/>
            <input type='text' name='apellido' placeholder='apellido'/>
            <input type='submit' value='enviar'/>
        </form>
    </div>
  )
}

//En este componente puede ser que lleguen parametros opcionales por la url, eso lo hicimos en su path
//y para recogerlos hay que usar el hook useParams()
