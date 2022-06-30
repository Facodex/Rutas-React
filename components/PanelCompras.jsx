import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

export const PanelCompras = () => {
  return (
    <div>
        <h1>Panel de compras ¿Que deseas comprar?</h1>
        <ol>
            <li><NavLink to='/compras/autos' className={({isActive}) => isActive ? "activado" : "desactivado"}>Autos</NavLink></li>
            <li><NavLink to='/compras/ropa' className={({isActive}) => isActive ? "activado" : "desactivado"}>Ropa</NavLink></li>
            <li><NavLink to='/compras/electrodomesticos' className={({isActive}) => isActive ? "activado" : "desactivado"}>Electrodomesticos</NavLink></li>
        </ol>
        <section className='compra'>
            <Outlet/>
        </section>
    </div>
  )
}


// ESTE COMPONENTE CONTIENE SUBRUTAS DENTRO, EN SU PAT DEL ROUTER ESTAN DEFINIDAS
// TAMBIEN FUE MUY IMPORTANTE LA UTILIZACION DE LA ETIQUETA OUTLET
