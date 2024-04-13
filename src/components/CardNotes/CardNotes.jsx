import React from 'react'
import './cardNotes.css'

const CardNotes = () => {
  return (
    <>
        <aside>
            <strong>Caderno de Notas</strong>
            <form>

            <div className="input-block">
                <label htmlFor="title">Título da Anotação</label>
                <input id='title' type="text" />
            </div>

            <div className="input-block">
                <label htmlFor="nota">Anotações</label>
                <textarea id='nota'></textarea>
            </div>

            <button type='submit'>Salvar</button>

            </form>
        </aside>
    </>
  )
}

export default CardNotes