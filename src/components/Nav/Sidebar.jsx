import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({close}) => {
  return ( 
      <div className="menu">
        <p className="cerrar-btn">Cerrar</p>
          <ul>
            <li onClick={close}><Link to={'/models'}>Modelos</Link></li>
            <li onClick={close}>Servicios y Accesorios</li>
            <li onClick={close}>Financiación</li>
            <li onClick={close}>Reviews y Comunidad</li>
          </ul>
        <div className="list-separator"></div>
          <ul>
            <li onClick={close}>Toyota Mobility Service</li>
            <li onClick={close}>Toyota Gazoo Racing</li>
            <li onClick={close}>Toyota Híbridos</li>
          </ul>
        <div className="list-separator"></div>
          <ul>
            <li onClick={close}>Concesionarios</li>
            <li onClick={close}>Test Drive</li>
            <li onClick={close}>Contacto</li>
          </ul>
        <div className="menu-footer">
          <ul>
            <li onClick={close}>Actividades</li>
            <li onClick={close}>Servicios al Cliente</li>
            <li onClick={close}>Ventas Especiales</li>
            <li onClick={close}>Innovación</li>
            <li onClick={close}>Prensa</li>
            <li onClick={close}>Acerca de...</li>
          </ul>
        </div>
    </div>
   );
}
 
export default Sidebar;
