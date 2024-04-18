import React, {useState, useEffect} from 'react'
import api from '../../server/api'
import './cardNotes.css'

const CardNotes = () => {

  const [title, setTitle] = useState("")
  const [notes, setNotes] = useState("")

  async function handleSubmit(e){
    e.preventDefault()

    await api.post('/annotations', {
      title,
      notes,
      priority: false
    })

    setTitle("")
    setNotes("")
  }

  useEffect(()=>{
    function enableSubmit(){
      let button = document.getElementById('buttonID')
      button.style.background = "#FFD3CA"

      if(title && notes){
        button.style.background = "#EB8F7A"
      }
    }

    enableSubmit()
  }, [title, notes])

  return (
    <>
        <aside>
            <strong>Caderno de Notas</strong>
            <form onSubmit={handleSubmit}>

            <div className="input-block">
                <label htmlFor="title">Título da Anotação</label>
                <input 
                  id='title' 
                  type="text" 
                  value={title}
                  onChange={e => setTitle(e.target.value)} 
                  maxLength="30"
                  required
                />
            </div>

            <div className="input-block">
                <label htmlFor="nota">Anotações</label>
                <textarea 
                  id='nota' 
                  value={notes} 
                  onChange={e => setNotes(e.target.value)} 
                  required
                />
            </div>

            <button type='submit' id='buttonID'>Salvar</button>

            </form>
        </aside>
    </>
  )
}

export default CardNotes