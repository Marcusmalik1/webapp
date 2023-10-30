

import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './pages/homepage';
import FilmPage from './pages/FilmPage';
import FrontPage from './pages/FrontPage';
import SwipePage from './pages/SwipePage';
import ProfilePage from './pages/ProfilePage';
import MagnetPage from './pages/MagnetPage';
import RoomPage from './pages/RoomPage';


function App() {

  return (
    <>
      
      <Navigation />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/findfilm" element={<FilmPage />} />
        <Route path="/front" element={<FrontPage />} />
        <Route path="/swipe" element={<SwipePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/magnet" element={<MagnetPage />} />
        <Route path="/room" element={<RoomPage />} />
      </Routes>
    
    </>
  )
}

export default App
