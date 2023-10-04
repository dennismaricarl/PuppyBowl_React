import './App.css'
import {Routes, Route} from "react-router-dom"
import SinglePlayer from './components/SinglePlayer'
import Home from './components/Home'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/players/:id' element={<SinglePlayer />} />
    </Routes>
    </>
  )
}

export default App
