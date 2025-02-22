import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Contact from './Pages/Contact'
import Training from './Pages/Training'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {ToastContainer} from 'react-toastify'
import Login from './Pages/Login'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/training' element={<Training />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
