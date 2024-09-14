import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Header from './Component/Header/index'
import Footer from './Component/Footer/index'
import Home from './Component/Home/index'
import PageNotFound from './Component/PageNotFound/index'
import MovieDetails from './Component/MovieDetails/index'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Header/>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie' element={<MovieDetails/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
