import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


import './App.css'
import { HomeComponent } from './HomeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <HomeComponent/>
    </>
  )
}

export default App
