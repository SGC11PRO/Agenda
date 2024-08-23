import { useState } from 'react'

const App = () => {
  const [contacts, setContacts] = useState([]) 
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
    console.log(newName)
  }

  const addContact = () => {
    const newContact = {
      id: contacts.length + 1,
      name: newName
    }

    setContacts(contacts.concat(newContact))

    console.log(newContact)
  }

  return (
    <div>
      <h2>Contactos</h2>
      <form>

        <div>
          Agregar Contacto : <input onChange={handleChange}/>
        </div>

        <div>
          <button >Añadir</button>
        </div>

      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App