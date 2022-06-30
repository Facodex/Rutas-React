import React from 'react'
import {Routes, Route, NavLink, BrowserRouter, Navigate} from 'react-router-dom';
import { InicioComponent } from '../components/InicioComponent';
import { ContactoComponent } from '../components/ContactoComponent';
import {ArticulosComponent} from '../components/ArticulosComponent';
import { PersonaComponent} from '../components/PersonaComponent';
import { PanelCompras } from '../components/PanelCompras';
//subrutas del PanelCompras
import {AutosComponent} from '../components/panel/AutosComponent';
import {RopaComponent} from '../components/panel/RopaComponent';
import {ElectrodomesticosComponent} from '../components/panel/ElectrodomesticosComponent';

export const RouterPrincipal = () => {

  return (
    <BrowserRouter>
        <nav className='navRouter'>
            <ul>
                <li>
                    <NavLink
                        to='/inicio'
                        className={({isActive}) => isActive ? "activado" : "desactivado"}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/articulos'
                        className={({isActive}) => isActive ? "activado" : "desactivado"}>
                        Articulos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contacto'
                        className={({isActive}) => isActive ? "activado" : "desactivado"}>
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/persona'
                        className={({isActive}) => isActive ? "activado" : "desactivado"}>
                        Persona
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/compras'
                        className={({isActive}) => isActive ? "activado" : "desactivado"}>
                        Panel de compras
                    </NavLink>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<InicioComponent/>}/>
            <Route path='/inicio' element={<InicioComponent/>}/>
            <Route path='/contacto' element={<ContactoComponent/>}/>
            <Route path='/articulos' element={<ArticulosComponent/>}/>

            {/* estos params seran opcionales  */}
            {/* y tambien practico con el Hook useNavigate */}
            <Route path='/persona/:nombre/:apellido' element={<PersonaComponent/>}/>
            <Route path='/persona/:nombre' element={<PersonaComponent/>}/>
            <Route path='/persona' element={<PersonaComponent/>}/>

            {/* este componente PANELCOMPRAS tiene subrutas dentro */}
            <Route path='/compras/*' element={<PanelCompras/>}>
                <Route path='autos' element={<AutosComponent/>}/>
                <Route path='ropa' element={<RopaComponent/>}/>
                <Route path='electrodomesticos' element={<ElectrodomesticosComponent/>}/>
            </Route>

            {/* esto seria para redirigir, es solo un ejemplo nosotros lo podemos aplicar en lo que nos convenga despues */}
            <Route path='/redirigir' element={<Navigate to='/persona'/>}/>

            <Route path='*' element={<InicioComponent/>}/>
        </Routes>
    </BrowserRouter>
  )
}
