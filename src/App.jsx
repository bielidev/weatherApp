import { Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './pages/Home';
import Weather from './pages/Weather';
import About from './pages/About';
import Map from './pages/Map';


export default function App() {
  return (
    <>
     <Navigation></Navigation>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/weather' element={<Weather />} />
      <Route path='/map' element={<Map />} />
      <Route path='/about' element={<About />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
    </>
  );
}