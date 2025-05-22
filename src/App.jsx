import { useState } from 'react'
import './App.css'
import Inbox from './components/Inbox'


function App() {

  return (
    <div className="content-wrapper">

      <div className="messages-div">
        <Inbox />
      </div>


      <div className="messages-description-div">

        
      </div>


      <div className="copilot-div">3</div>


    </div>
  )
}

export default App
