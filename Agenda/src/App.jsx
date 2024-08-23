import Note from "./components/Note"
import { useState, useEffect } from 'react'

const App = () => {

  // almacenar las notas en un estado del componente
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  // funcion para añadir nueva nota
  const addNote = (event) => {

    event.preventDefault() // evita recargar la pagina al enviar el evento

    // creamos el objeto de la nota
    const noteObject = {
      content: newNote,
      id: notes.length + 1,
      important: Math.random() > 0.5
    }

    // actualizamos el array de notas
    setNotes(notes.concat(noteObject))
    
    console.log(noteObject)

    // limpiamos el input field
    setNewNote('')


  }

  // funcion para registrar los cambios de texto en el input
  const handleNoteChange = (event) => {

    setNewNote(event.target.value) // sincroniza el contenido del input, con el valor de la newNote
  }


  // ahora tenemos una nueva variable que cambia segun el valor de note.important
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true) // if(showAll) -> return notes : else -> return aquellas notas con 'important'

  // funcion para cambiar boton de mostrar notas
  const handleNotesToShow = () => {
    setShowAll(!showAll) // alterna el valor de showAll
  }

  return (
    <>

      <h1>Notes</h1>

      <div>
        <button onClick={handleNotesToShow}>
          Show {showAll ? 'Important Notes' : 'All Notes' }
        </button>
      </div>

      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note}/>
        )}
      </ul>

      <form>
        <input value={newNote} onChange={handleNoteChange}/>
        <button onClick={addNote}>Create</button>
      </form>

    </>
  )
}

export default App