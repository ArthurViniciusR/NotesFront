import React from 'react'
import './app.css'

import Notes from './components/Notes/Notes'
import CardNotes from './components/CardNotes/CardNotes'

function App() {

  return (
    <div id="app">
      <CardNotes/>
      <main>
        <ul>
          <Notes/>
        </ul>
      </main>

    </div>
  )
}

export default App
