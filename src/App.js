import './App.css';
import Projects from './pages/Projects';
//import Resume from './pages/Resume';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import BottomBar from './components/BottomBar';
import ToyotaTripsPage from './pages/ToyotaTrips';
import RPG from './pages/RPG';
import ClaimSafePage from './pages/ClaimSafe';
//import logo from './images/mkm_logo.jpg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <div>
        <Navigation/>
      </div>
      <div>
        <Routes>
          <Route exact path="/manishkmallik/" element={<Home/>} /> 
          <Route path="/manishkmallik/about" element={<About/>} />
          <Route path="/manishkmallik/projects" element={<Projects/>} />
          <Route path="/manishkmallik/toyotatrips" element={<ToyotaTripsPage/>} />
          <Route path="/manishkmallik/readypetgo" element={<RPG/>} />
          <Route path="/manishkmallik/claimsafe" element={<ClaimSafePage/>} />
        </Routes>
      </div>
      <div className='contact-bar'>
        <BottomBar/>
      </div>
    </div>
  );
}

export default App;
