import './App.css';
import { Routes,Route} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Intro from './components/pages/Intro';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import Nopage from './components/pages/Nopage';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Intro />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Nopage />} />
        
      </Routes>
    </div>
  );
}

export default App;
