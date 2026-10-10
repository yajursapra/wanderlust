import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Post from './pages/Post'
import SignUp from './pages/SignUp'

export default function App() {
  const [dark, setDark] = useState(false)

  return (

    <BrowserRouter>
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/post/:id' element={<Post />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  )
}