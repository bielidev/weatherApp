import { Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './pages/Home';
import Weather from './pages/Weather';
import About from './pages/About';
import Map from './pages/Map';
import Favorites from './pages/Favorites';
import { ThemeProvider } from '@/components/theme-provider';
import Compare from './pages/Compare';


export default function App() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
     <Navigation></Navigation>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/weather' element={<Weather />} />
      <Route path='/map' element={<Map />} />
      <Route path='/about' element={<About />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/compare' element={<Compare />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
    </ThemeProvider>
  );
}