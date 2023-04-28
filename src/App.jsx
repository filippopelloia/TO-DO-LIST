import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Body from './Body.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Navbar/>
        <Body/>
      </div>
    </>
  )
}

export default App
