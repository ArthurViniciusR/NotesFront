import React, { useEffect, useState } from 'react'
import api from '../../server/api'
import { AiOutlineDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import './notes.css'
import './priority.css'


function Notes(){

  const [allNotes, setAllnotes] = useState([])
  const [changedNote, setChangedNote] = useState("")


  useEffect(()=>{
    async function getAllNotes(){
      const response = await api.get('/annotations')
      setAllnotes(response.data)
    }
    getAllNotes()
  } , [allNotes])

  async function handleDelete(id){
    const deletedNote = api.delete(`/annotations/${id}`)

    if(deletedNote){
      setAllnotes(allNotes.filter(note => note.id !== id))
    }
  }
  
  async function handleChangePriority(id){
    await api.post(`/priorities/${id}`)
  }

  async function handleSave(e, notes, id){

    e.style.cursor = "default"
    e.style.boxShadow = "none"

    if(changedNote && changedNote !== notes){
      await api.post(`/contents/${id}`, {
        notes: changedNote,
      })
    }
  }

  function handleEdit(e, priority){

    e.style.cursor = "text"
    e.style.borderRadius = "5px"

    if (priority){
      e.style.boxShadow = "0 0 5px white"
    } else {
      e.style.boxShadow = "0 0 5px gray"
    }
  }


  return (
    <>
    {allNotes.map(data => (
        <li key={data._id} className={data.priority ? "notepad-priority" : "notepad-infos"}>
            <div>
                <strong>{data.title}</strong>
                <div>
                  <AiOutlineDelete size="24" onClick={() => handleDelete(data._id)}/>
                </div>
            </div>

            <textarea 
              defaultValue={data.notes}
              onClick={e => handleEdit(e.target, data.priority)}
              onChange={e => setChangedNote(e.target.value)}
              onBlur={e => handleSave(e.target, data.notes, data._id)}
            />
            <span><AiOutlineExclamationCircle size="24" onClick={() => handleChangePriority(data._id)}/></span>
        </li>
    ))}
    </>
  )
}

export default Notes