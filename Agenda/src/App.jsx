import { useState, useEffect } from 'react'
import axios from 'axios'

// componentes
import Filter from './components/Filter'
import AddContactForm from './components/AddContactForm'

const App = () => {

  // variables
  const [contacts, setContacts] = useState([]) 

  // test
  // const [notes, setNotes] = useState([])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  // filtered contacts
  let filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  if(filteredContacts.length === 0) filteredContacts = contacts // show all contacts if no filter


  // ---
  useEffect(() => {
    console.log('useEffect')

    axios
      .get('http://localhost:3001/contacts')
      .then(response => {
        console.log('Promise fulfilled')
        setContacts(response.data)
      })
  }, [])

  // see order of events
  console.log('render', contacts.length, 'notes')


  // Funciones
  const handleChangeName = (event) => {

    setNewName(event.target.value) // recuperar el input
  }

  const handleChangePhone = (event) => {
    setNewPhone(event.target.value) // recuperar el input 2
  }

  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  const addContact = (event) => {

    event.preventDefault()

    const newContact = {
      name: newName,
      phone: newPhone,
      id: contacts.length + 1
    }

    // envia el nuevo obj al servidor
    axios
      .post('http://localhost:3001/contacts', newContact, newContact.id)
      .then(response => {

        setContacts(contacts.concat(response.data))
        console.log(response)
      })

    // verifica si el contacto ya existe
    const contactExists = contacts.some(contact => contact.name === newContact.name)

    if(contactExists) {
      alert(`[ ! ] El contacto ${newContact.name} ya existe. No puedes añadir un contacto existente`)
    }
    else 
    {
      // añadir al array
      newContact.name.length === 0 || newContact.phone.length === 0
        ? alert('Rellena todos los campos para continuar') 
        : setContacts(contacts.concat(newContact))

    }

    // limpiar input
    setNewName('')
    setNewPhone('')
  }

  const deleteContact = (id) => {

    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este contacto?')
    
    if(confirmDelete) 
    {
      axios
        .delete(`http://localhost:3001/contacts/${id}`)
        .then(() => {
          setContacts(contacts.filter(contact => contact.id !== id))
        })
    }
  }


  // return
  return (
    <div>
      <h2>Contactos</h2>

      <Filter filteredContacts={filteredContacts} handleChangeFilter={handleChangeFilter} deleteContact={deleteContact}/>

      <AddContactForm 
        addContact={addContact} 
        handleChangeName={handleChangeName} 
        handleChangePhone={handleChangePhone} 
        newName={newName} 
        newPhone={newPhone}
      />

    </div>
  )
}

export default App