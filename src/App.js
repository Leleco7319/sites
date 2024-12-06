import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import BasicNavbar from './components/BasicNavbar/BasicNavbar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <div className='app'>
      <BasicNavbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
