import React, { useContext } from 'react';
import Slider from 'react-styled-carousel';
import { ModelsContext } from "../../context/ModelsContext";
 
const responsive = [
  { breakPoint: 1512, cardsToShow: 5 },
  { breakPoint: 1280, cardsToShow: 4 },
  { breakPoint: 960, cardsToShow: 3 },
  { breakPoint: 650, cardsToShow: 2 },
  { breakPoint: 300, cardsToShow: 1 }

];

const Carousel = () => {

    const { modelo } = useContext(ModelsContext);

    const { model_features } = modelo;


    return (

        <Slider 
            responsive={responsive}
            infinite={false}
            padding="43px"
            width="0"
            >

                {model_features ? model_features.map(model_feature => (
                    <div className="modelfeature-card" key={modelo.id}>
                    <img className="modelfeature-image" src={`https://challenge.agenciaego.tech${model_feature.photo}`} alt={`Imagen de ${model_feature.name}`}/>
                    <h3 className="modelfeature-title">{model_feature.name}</h3>
                    <p className="modelfeature-content">{model_feature.description}</p>
                    </div>
                )) : ""}
    
        </Slider>
    )
};
 
export default Carousel;
