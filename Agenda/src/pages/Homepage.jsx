import React from "react"
import Filter from "../components/Filter"

const Homepage = ({ filteredContacts, handleChangeFilter, deleteContact}) => {
    return (
        <>
        <h2>Contactos</h2>

        <Filter filteredContacts={filteredContacts} handleChangeFilter={handleChangeFilter} deleteContact={deleteContact}/>
        </>
    )
}

export default Homepage