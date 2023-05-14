import { useState } from 'react'
import { Sidenav } from './components/Sidenav'
import { Main } from './components/Main'
import { Works } from './components/Works'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Works />
    </div>
 
  )
}

export default App
