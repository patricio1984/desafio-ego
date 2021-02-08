# Desafío para Estudio Ego realizado en React.js

Para este proyecto utilizamos React.js para realizar un front end que hace una consulta a la api challenge.agenciaego.tech/models (y también al endpoint challenge.agenciaego.tech/models/$id). Utilizamos un fetch a dicha API para acceder a los datos, los cuales se compartieron a los demás componentes hijos a través de un hook de useContext.
Luego inicializamos los componentes del navbar y de los diferentes modelos (que son mappeados a través del fetch de la api), también cada modelo tiene acceso a través de un button a un link que redirecciona la página a la ficha del modelo elegido.
Se creó un componente FilterNav para realizar las diferentes instancias de reordenamiento de modelos según precio y año de los mismos. 
Para la creación del Sidebar y del Carousel de la ficha de modelos se utilizaron librerías internas instaladas mediante npm.
En cuanto al diseño de la página, fue confeccionado en su totalidad con CSS. 


