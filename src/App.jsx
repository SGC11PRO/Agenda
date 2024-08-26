import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// paginas
import Homepage from './pages/Homepage'
import AddContact from './pages/AddContact'

import './app.css'

// servicios
import contactService from './services/contacts'


const App = () => {

  // hooks

  // variables
  const [contacts, setContacts] = useState([]) 

  // test
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  // filtered contacts -> Solo aplica toLowerCase() si filteredContacts !== undefined o null
  const filteredContacts = contacts.filter(contact => 
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );


  // axios
  const baseURL = 'http://localhost:3001/api/contacts'

  // ---
  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setContacts(initialContacts)
      })
  }, [])


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
      number: newPhone,
      id: String(contacts.length + 1)
    }



    // verifica si el contacto ya existe
    const contactExists = contacts.some(contact => contact.name === newContact.name)

    if(contactExists) {
      alert(`[ ! ] El contacto ${newContact.name} ya existe. No puedes añadir un contacto existente`)
    }
    else 
    {
      // añadir al array
      if(newContact.name.length === 0 || newContact.number.length === 0) {

        // se necesitan todos los campos rellenados
        alert('Rellena todos los campos para continuar') 
      }
      else 
      {
        // envia el nuevo obj al servidor
        contactService
          .create(newContact)
          .then(returnedContact => {

            setContacts(contacts.concat(returnedContact))

            event.preventDefault()

            // limpiar input
            setNewName('')
            setNewPhone('')

            console.log('Contact Created')

          })

          .catch(error => {
            console.error('Error al crear el contacto', error)
            alert('Ha ocurrido un error')
          })
      }

    }


  }

  const deleteContact = (id) => {

    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este contacto?')
    
    if(confirmDelete) 
    {
      contactService
        .remove(id)
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