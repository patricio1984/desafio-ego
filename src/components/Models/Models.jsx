import React, { useContext } from 'react';
import FilterNav from "../Nav/FilterNav";
import Model from "./Model";
import { ModelsContext } from "../../context/ModelsContext";
import { v4 as uuidv4 } from 'uuid';

const Models = () => {
    
    const { modelos } = useContext(ModelsContext);

    return (
        <div className="model-wrapper"> 
            <h1 className="title">Descubrí todos los modelos</h1>
            <FilterNav />
            <div className="model-container">
            {modelos.map(modelo => (
                    
                        <Model 
                            key={uuidv4()}
                            modelo={modelo}
                        />
            
            ))}
            </div> 
        </div> 
     );
}
 
export default Models;