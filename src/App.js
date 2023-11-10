
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  
  return (
    <div className="App bg-gradient-to-br from-regal-blue to-hard-blue min-h-screen">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home latitude={latitude} setLongitude={ setLongitude} setLatitude={setLatitude} longitude={longitude}/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
