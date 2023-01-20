import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Boiler from './pages/Boiler';
import Contact from './pages/Contact';
import Error from './pages/404';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogView from './pages/BlogView';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-11 md:px-3">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogView />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/boiler" element={<Boiler />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
