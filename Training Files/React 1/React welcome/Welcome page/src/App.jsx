import { useState } from 'react'
import './App.css'
import Welcome from './wlcome.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Welcome />
      </div>
    </>
  )
}

export default App
