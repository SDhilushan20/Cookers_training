import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './welcome.jsx'
import './index.css';

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
