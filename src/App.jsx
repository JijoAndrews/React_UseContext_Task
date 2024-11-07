import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeComponent } from './components/HomeComponent'

import carddataLoader from "./loaders/carddataLoader"

import './App.css'


const router=createBrowserRouter([
  {
    path:'/',
    element: <HomeComponent/>,
    loader: carddataLoader
  }
],
 { future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionStatusRevalidation: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  }
}
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} future={{v7_startTransition: true,}} />
  )
}

export default App
