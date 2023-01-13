import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Boiler from './pages/Boiler'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-11 md:px-5">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/boiler" element={<Boiler />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
