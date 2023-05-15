import { useState } from 'react'
import Nav from './components/estaticos/nav/Nav';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import {Grid} from '@material-ui/core';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Home />
    <Footer/>
    </>
      
  )
}

export default App
