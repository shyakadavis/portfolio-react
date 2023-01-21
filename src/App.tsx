import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Boiler from './pages/Boiler';
import Contact from './pages/Contact';
import Error from './pages/404';
import Home from './pages/Home';
import Projects from './pages/Projects';
import BlogView from './pages/BlogView';
import Auth from './pages/Auth';
import Dashboard from './pages/admin/Dashboard';
import Content from './pages/admin/Content';
import Mail from './pages/admin/Mail';
import Users from './pages/admin/Users';
import Layout from './layouts/Layout';
import RequireAuth from './components/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blog/:slug" element={<BlogView />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="auth" element={<Auth />} />
          <Route path="boiler" element={<Boiler />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="content" element={<Content />} />
            <Route path="users" element={<Users />} />
            <Route path="mail" element={<Mail />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
