
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Components/Landingpage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import ProductPage from './Components/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
 <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product' element = {<ProductPage/>}/>
        </Routes>
      </Router>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
