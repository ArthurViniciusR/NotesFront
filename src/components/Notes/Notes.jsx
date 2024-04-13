import React from 'react'
import './notes.css'

function Notes() {
  return (
    <>
        <li className="notepad-infos">
            <div>
                <strong>Fazer Compras</strong>
                <div>x</div>
            </div>

            <textarea>
                Lorem ipsum dolor sit amet. Qui deserunt voluptatem est architecto libero quo saepe impedit ad eius consequatur a laudantium officiis. Ex commodi omnis At soluta nemo id ipsa adipisci.
            </textarea>
            <span>!</span>
        </li>
    </>
  )
}

export default Notes