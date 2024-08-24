import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// paginas
import Homepage from './pages/Homepage'
import AddContact from './pages/AddContact'

import './index.css'


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
      id: String(contacts.length + 1)
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
    <Router>
      <div>
        <nav className='navbar'>
          <p className='logo'><span>Phone</span>Book</p>
          <ul className='links'>
            <li><Link to='/'>All Contacts</Link></li>
            <li><Link to='/create'>New Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element=
          {
            <Homepage 
              filteredContacts={filteredContacts} 
              deleteContact={deleteContact} 
              handleChangeFilter={handleChangeFilter}
            />
          }
          />

          <Route path='/create' element=
          {          
            <AddContact 
              addContact={addContact} 
              handleChangeName={handleChangeName} 
              handleChangePhone={handleChangePhone} 
              newName={newName} 
              newPhone={newPhone}
            />
          }
          />
        </Routes>


      </div>
    </Router>
  )
}

export default App