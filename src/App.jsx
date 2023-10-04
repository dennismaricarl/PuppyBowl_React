import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import AllPlayers from "./components/AllPlayers"
import SinglePlayer from './components/SinglePlayer'
import SearchBar from './components/SearchBar'

function App() {
  const [puppyList, setPuppyList] = useState(null);
  const [singlePuppyId, setSinglePuppy] = useState(null)

  return (
    <>
    <SearchBar/>
      <h1>Puppy Bowl</h1>
      <div>

        <AllPlayers 
        puppyList={puppyList}
        setPuppyList={setPuppyList}
        setSinglePuppy={setSinglePuppy}
        />


        {singlePuppyId && (
            <SinglePlayer 
            singlePuppyId={singlePuppyId}
            setSinglePuppy={setSinglePuppy}
            />
        )}


      </div>
    </>
  )
}

export default App
