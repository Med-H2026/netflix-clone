import './App.css'
import Home from './pages/home'
import Login from './pages/Login'
import Player from './pages/Player'
import {Routes,Route} from 'react-router-dom'
function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/player/:id' element={<Player/>} />
      </Routes>        
    </div>
  )
}

export default App
