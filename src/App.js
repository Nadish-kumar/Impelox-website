import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Home from "./Components/Home/Home"
import Company from './Components/Company/Company';
import Career from './Components/Career/Career';
import Job from './Components/Job/Job';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/company" element={<Company />} /> 
          <Route path="/career" element={<Career />} /> 
          <Route path="/job" element={<Job />} /> 
          <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
