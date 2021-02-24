import React, { useContext, useState } from 'react';
import { ModelsContext } from "../../context/ModelsContext";

    
const FilterNav = () => {

        const { allModelos, modelos, guardarModelos } = useContext(ModelsContext);

        //state del hover del boton dropdown
        const [filterHovered, setFilterHovered] = useState(false);
        const [orderHovered, setOrderHovered] = useState(false);

        const toggleOrderHover = () => setOrderHovered(!orderHovered);
        
        const toggleFilterHover = () => {
            setFilterHovered(!filterHovered);
        }
        
        const segmentName = [...new Set(allModelos.map(item => item.segment))];        
        
        const filterSegment = e => {
    
            const segment = allModelos.filter(modelo => modelo.segment === e.target.name);
            
            guardarModelos(segment);
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
                    {segmentName.map(segment => (
                        <button type="button" className="filter-element" name={segment} onClick={filterSegment}>{segment}</button>
                    ))}
                </div>
                <ul className={filterHovered ? 'dropdown-menu-visible-first' : 'dropdown-menu-first'}>
                    <li><button type="button" className="dropdown-btn dropdown-btn-first" onClick={filterBtnAll}>Todos</button></li>
                    {segmentName.map(segment => (
                        <li><button type="button" className="dropdown-btn" name={segment} onClick={filterBtnSegment}>{segment}</button></li>
                    ))}
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