import React, { useContext } from 'react';
import { ModelsContext } from "../../context/ModelsContext";
import CarouselSlide from "./Carousel";



const FileModel = () => {

    const { modelo } = useContext(ModelsContext);

    const { photo, name, title, description, model_highlights } = modelo;


    return (
        <> 
            <section className="filemodel-title">
                <img src={`https://challenge.agenciaego.tech${photo}`} alt={`Imagen de ${name}`} className="imgmodel-title1"/>
                <div className="information-column">
                    <h3 className="model-name">{name}</h3>
                    <h1 className="model-title">{title}</h1>
                    <p className="description-title">{description}</p>
                </div>
            </section>
            <section className="carousel-wrapper">
                <CarouselSlide />
            </section>
                
            {model_highlights ? (
                <section className="information-model">
                <div className="information-data">                     
                    <div className="modeldata-container">
                        <h2 className="modeldata-title">{model_highlights[0].title}</h2>
                        <p className="modeldata-description">{model_highlights[0].content}</p>
                    </div>
                    <img className="imgmodel-title2" src={`https://challenge.agenciaego.tech${model_highlights[0].image}`} alt={`Imagen de ${model_highlights[0].title}`} />
                </div>

                <div className="information-data">
                                     
                <div className="modeldata-container">
                    <h2 className="modeldata-title">{model_highlights[1].title}</h2>
                    <p className="modeldata-description">{model_highlights[1].content}</p>
                </div>
                <img className="imgmodel-title3" src={`https://challenge.agenciaego.tech${model_highlights[1].image}`} alt={`Imagen de ${model_highlights[1].title}`} />
                </div>
                </section>
            ) : ""}
        </>
     );
}
 
export default FileModel;