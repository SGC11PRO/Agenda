import React from "react"
import Filter from "../components/Filter"

import './Homepage.css'


const Homepage = ({ filteredContacts, handleChangeFilter, deleteContact}) => {
    return (
        <>
            <img src="./../../public/Gradient.png"/>
            <div className="homepage">
                <h2>Contactos</h2>
                
                <div className="card">
                    <Filter filteredContacts={filteredContacts} handleChangeFilter={handleChangeFilter} deleteContact={deleteContact}/> 
                </div>
            </div>
        </>
    )
}

export default Homepage