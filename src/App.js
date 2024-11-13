import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import BasicNavbar from './components/BasicNavbar/BasicNavbar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className='app'>
      <BasicNavbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
