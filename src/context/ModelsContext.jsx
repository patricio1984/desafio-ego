import React, { createContext, useState, useEffect } from 'react';

export const ModelsContext = createContext();

const ModelsProvider = (props) => {

        //State de modelos
        const [ modelo, guardarModelo ] = useState([]);
        const [ modelos, guardarModelos ] = useState([]);
        const [ allModelos, guardarAllModelo ] = useState([]);

        const { id } = modelo;


         //Cargar un modelo
         useEffect(() => {
             const consultarAPI = async () => {         
                try {
                    const api = await fetch("https://challenge.agenciaego.tech/models");
                    const modelos = await api.json();
    
                    const api2 = await fetch(`https://challenge.agenciaego.tech/models/${id ? id : ""}`);
                    const modelo = await api2.json();
           
                    guardarAllModelo(modelos);
                    guardarModelos(modelos);
                    guardarModelo(modelo);
                    localStorage.setItem("modelo", JSON.stringify(modelo));

                } catch (error) {
                   console.log(error); 
                }
             }
             consultarAPI()
         }, [id]);

    return (
        <ModelsContext.Provider
            value={{
                allModelos,
                modelo,
                modelos,
                guardarModelo,
                guardarModelos
            }}
        >
            {props.children}
        </ModelsContext.Provider>
    )
}

export default ModelsProvider;