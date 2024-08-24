import React from "react"
import Filter from "../components/Filter"

import './Homepage.css'


const Homepage = ({ filteredContacts, handleChangeFilter, deleteContact}) => {
    return (
        <>
            <img src="./../../public/Gradient.svg"/>
            <div className="homepage">
                <h2>Contactos</h2>

                <Filter filteredContacts={filteredContacts} handleChangeFilter={handleChangeFilter} deleteContact={deleteContact}/>
            </div>
        </>
    )
}

export default Homepage