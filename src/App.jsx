import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/main/Home.jsx';
import Storage from './pages/main/Storage.jsx';
import CreaturePage from './pages/derivates/CreaturePage.jsx';
import Forum from './pages/main/Forum.jsx';
import Users from './pages/main/Users.jsx';
import Profile from './pages/main/Profile.jsx';
import Exit from './pages/Exit.jsx';
import Footer from './components/shared/Footer.jsx'; 
import TituloPagina from './components/shared/TituloPagina.jsx';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <TituloPagina />
      <Router>
        <div className='bg-cyan-700'>
          <header className='relative bg-cyan-700 flex items-center justify-between py-3 shadow-md inset-shadow-amber-200'>
            {/* Imagen de logo */}
            <Link to="/"><img className='w-40 mx-1 bg-cyan-600 rounded-2xl shadow-[0_0_15px_6px_rgba(0,200,200,0.5)]' src="/img/rec/logo.webp" alt="logo" /></Link>
            
            {/* Ícono de menú hamburguesa a la derecha */}
            <button className="lg:hidden text-white p-2 ml-auto" onClick={toggleMobileMenu}>
              ☰
            </button>
          </header>

          {/* Barra de navegación */}
          <nav className={`lg:flex flex-col lg:flex-row ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block items-center`}>
            <ul className='flex flex-col lg:flex-row gap-4 m-4'>
              <li className='hover:bg-cyan-300 hover:opacity-50 text-white text-xl font-bold p-2 rounded hover:text-black'>
                <Link to="/">Inicio</Link>
              </li>
              <li className='hover:bg-cyan-300 hover:opacity-50 text-white text-xl font-bold p-2 rounded hover:text-black'>
                <Link to="/storage">Almacen</Link>
              </li>
              <li className='hover:bg-cyan-300 hover:opacity-50 text-white text-xl font-bold p-2 rounded hover:text-black'>
                <Link to="/forum">Foro</Link>
              </li>
              <li className='hover:bg-cyan-300 hover:opacity-50 text-white text-xl font-bold p-2 rounded hover:text-black'>
                <Link to="/users">Usuarios</Link>
              </li>
              <li className='hover:bg-cyan-300 hover:opacity-50 text-white text-xl font-bold p-2 rounded hover:text-black'>
                <Link to="/profile">Perfil</Link>
              </li>
              <li className='hover:bg-cyan-300 hover:opacity-50 text-white text-xl font-bold p-2 rounded hover:text-black'>
                <Link to="/exit">Salir</Link>
              </li>
            </ul>
          </nav>

          <div className="overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/storage" element={<Storage />} />
              <Route path="/storage/:PokeName" element={<CreaturePage />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/users" element={<Users />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/exit" element={<Exit />} />
            </Routes>
          </div>
        </div>
      </Router>

      <Footer />
    </>
  );
}

export default App;
