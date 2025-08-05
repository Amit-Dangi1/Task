import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
 import { Router, Routes } from 'react-router-dom'
import Card from './components/Card'

function App() {
   
  return (
    <>
      <Header/>
      <Card/>
          </>
  )
}

export default App
