import React, { useContext, useState } from 'react';
import { ModelsContext } from "../../context/ModelsContext";

    
const FilterNav = () => {

        const { allModelos, modelos, guardarModelos } = useContext(ModelsContext);

        //state del hover del boton dropdown
        const [filterHovered, setFilterHovered] = useState(false);
        const [orderHovered, setOrderHovered] = useState(false);
        const [toggleClass, setToggleClass] = useState(false)

        const toggleOrderHover = () => setOrderHovered(!orderHovered);
        
        const toggleFilterHover = () => {
            setFilterHovered(!filterHovered);
            setToggleClass();
        }

        
        const filterSegment = e => {
    
            const segment = allModelos.filter(modelo => modelo.segment === e.target.name);
            
            guardarModelos(segment);

            setToggleClass();
        }

        const filterAll = () => {
            const allFiltered = allModelos.map(modelo => modelo);

            guardarModelos(allFiltered);
        }

        const filterBtnSegment = e => {
    
            const segment = allModelos.filter(modelo => modelo.segment === e.target.name);
            
            guardarModelos(segment);

            toggleFilterHover();
        }

        const filterBtnAll = () => {
            const allFiltered = allModelos.map(modelo => modelo);

            guardarModelos(allFiltered);

            toggleFilterHover();
        }

        const withoutFilter = () => {
            const filteredSort = [...modelos].sort((a, b) => (a.id > b.id) ? 1 : -1);

            guardarModelos(filteredSort);

            toggleOrderHover(false);
        }

        const sortMinToMax = () => {
            const filteredSort = [...modelos].sort((a, b) => (a.price > b.price) ? 1 : -1);

            guardarModelos(filteredSort);

            toggleOrderHover(false);
        }

        const sortMaxToMin = () => {
            const filteredSort = [...modelos].sort((a, b) => (a.price < b.price) ? 1 : -1);

            guardarModelos(filteredSort);

            toggleOrderHover(false);
        }

        const sortOldToNew = () => {
            const filteredSort = [...modelos].sort((a, b) => (a.year < b.year) ? 1 : -1);

            guardarModelos(filteredSort);

            toggleOrderHover(false);
        }

        const sortNewToOld = () => {
            const filteredSort = [...modelos].sort((a, b) => (a.year > b.year) ? 1 : -1);

            guardarModelos(filteredSort);

            toggleOrderHover(false);
        }

       
        return (
            <nav className="filter-container">
                <button 
                    type="button" 
                    className="filter-element-first"
                    id="filter-element-first"
                    onClick={toggleFilterHover}
                >Filtrar por <span className="caret-element">{filterHovered ? "ʌ" : "v" }</span></button> 
                <div className="container">
                    <h3 className="filter-element-title">Filtrar por</h3>
                    <button type="button" className="filter-element" onClick={filterAll}>Todos</button>
                    <button type="button" className={`filter-element ${toggleClass ? 'filter-element:active' :''}`} name="Autos" onClick={filterSegment}>Autos</button>
                    <button type="button" className="filter-element" name="Pickups y Comerciales" onClick={filterSegment}>Pickups y Comerciales</button>
                    <button type="button" className="filter-element" name="SUVs y Crossovers" onClick={filterSegment}>SUVs y Crossovers</button>
                </div>
                <ul className={filterHovered ? 'dropdown-menu-visible-first' : 'dropdown-menu-first'}>
                    <li><button type="button" className="dropdown-btn dropdown-btn-first" onClick={filterBtnAll}>Todos</button></li>
                    <li><button type="button" className="dropdown-btn dropdown-btn-first" name="Autos" onClick={filterBtnSegment}>Autos</button></li>
                    <li><button type="button" className="dropdown-btn" name="Pickups y Comerciales" onClick={filterBtnSegment}>Pickups y Comerciales</button></li>
                    <li><button type="button" className="dropdown-btn" name="SUVs y Crossovers" onClick={filterBtnSegment}>SUVs y Crossovers</button></li>
                </ul> 
                <div className="dropdown-container">
                    <button 
                        type="button" 
                        className="filter-element-last"
                        onClick={toggleOrderHover}
                    >Ordenar por<span className="caret-element">{orderHovered ? "ʌ" : "v" }</span></button>
                    <ul className={orderHovered ? 'dropdown-menu-visible-last' : 'dropdown-menu-last'}>
                        <li><button type="button" className="dropdown-btn dropdown-btn-first" onClick={withoutFilter}>Nada</button></li>
                        <li><button type="button" className="dropdown-btn" onClick={sortMinToMax}>De <span className="dropdown-span">menor</span> a <span className="dropdown-span">mayor</span> precio</button></li>
                        <li><button type="button" className="dropdown-btn" onClick={sortMaxToMin}>De <span className="dropdown-span">mayor</span> a <span className="dropdown-span">menor</span> precio</button></li>
                        <li><button type="button" className="dropdown-btn" onClick={sortOldToNew}>Más <span className="dropdown-span">nuevos</span> primero</button></li>
                        <li><button type="button" className="dropdown-btn" onClick={sortNewToOld}>Más <span className="dropdown-span">viejos</span> primero</button></li>
                    </ul>    
                </div>     
            </nav>
         );
    }
     
export default FilterNav;