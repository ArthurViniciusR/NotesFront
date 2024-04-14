import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../server/api'
import { AiOutlineDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import './notes.css'
import './priority.css'


function Notes(){

  const [allNotes, setAllnotes] = useState([])
  
  useEffect(()=>{
    async function getAllNotes(){
      const response = await api.get('/annotations')
  
      setAllnotes(response.data)
    }
  
    getAllNotes()
  } , [allNotes])

  return (
    <>
    {allNotes.map(data => (
        <li className={data.priority ? "notepad-priority" : "notepad-infos"}>
            <div>
                <strong>{data.title}</strong>
                <div><AiOutlineDelete size="24"/></div>
            </div>

            <textarea 
              defaultValue={data.notes}
            />
            <span><AiOutlineExclamationCircle size="24"/></span>
        </li>
    ))}
    </>
  )
}

export default Notes