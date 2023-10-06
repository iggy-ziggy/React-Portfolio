import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './components/pages/Home';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Footer />
        <Home />
    </>
  )
}

export default App
