import React, { useState, useContext } from 'react';
import { ModelsContext } from "../../context/ModelsContext";
import { Link } from 'react-router-dom';
import useViewport from "../../hooks/useViewport";

const Model = ({modelo}) => {

    const { name, year, price, photo } = modelo;

    const { guardarModelo } = useContext(ModelsContext);

    const [display, setDisplay] = useState("btn-notdisplayed");

    const { width } = useViewport();
    const breakpoint = 620;

    const showButton = e => {
        e.preventDefault();
        setDisplay("btn-displayed");
      };
    
      const hideButton = e => {
        e.preventDefault();
        setDisplay("btn-notdisplayed");
      };

    return (   
            <div 
                className="card"
                onMouseEnter={e => showButton(e)}
                onMouseLeave={e => hideButton(e)}
            >
                <div className="card-body">
                    <p className={display === "btn-displayed" ? "card-name-active" : "card-name"}>{name}</p>
                    <p className="card-yearprice">{year} | $ {price}</p>
                </div>
                <img loading="lazy" src={`https://challenge.agenciaego.tech${photo}`} className="card-image" alt={`Imagen de ${name}`} width="auto" height="auto" />
                <Link to={`/models/${modelo.id}`}><button 
                    type="button" 
                    className={width < breakpoint ? "btn-displayed" : display}
                    onClick={() => {
                        guardarModelo(modelo);
                    }}
                    >Ver Modelo
                </button></Link>
            </div>   
     );
}
 
export default Model;