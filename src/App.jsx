import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeComponent } from './components/HomeComponent'

import carddataLoader from "./loaders/carddataLoader"
import productdata from './loaders/curcartdata'

import './App.css'
import { CartPageComponent } from './components/CartPageComponent'


const router=createBrowserRouter([
  {
    path:"/",
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

  return (
    <RouterProvider router={router} future={{v7_startTransition: true,}} />
  )
}

export default App
