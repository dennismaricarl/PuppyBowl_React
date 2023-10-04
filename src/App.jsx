import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import NavBar from './components/NavBar'
import AllPlayers from "./components/AllPlayers"
import SinglePlayer from './components/SinglePlayer'

function App() {

  return (
    <>
      <h1>Puppy Bowl</h1>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/" element={<AllPlayers/>}/>
          <Route path="/players/:id" element={<SinglePlayer/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
