import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import About from './pages/About'
import Home from './pages/Banner/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Layout/>}>
      <Route path="" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      </Route >
    </Routes>
    </BrowserRouter>
  ) 
}

export default App