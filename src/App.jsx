import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Storage from './pages/Storage.jsx';
import Users from './pages/Users.jsx';
import Profile from './pages/Profile.jsx';
import Exit from './pages/Exit.jsx';
import Footer from './components/Footer.jsx'; 

function App() {

  return (
    <>
     <Router>
      <div>
        <header className='relative bg-amber-200 flex lg:flex-row flex-col items-center justify-between py-3 shadow-md inset-shadow-amber-200'>
          <img className='w-100 mx-1' src="/img/rec/logo.png" alt=""/>
          <nav className='items-center'>
            <ul className='flex flex-row align-middle gap-2 m-2'>
              <li className='hover:bg-red-400 text-xl p-2 rounded-xl hover:text-white'>
                <Link to="/">Inicio</Link>
              </li>
              <li className='hover:bg-red-400 text-xl p-2 rounded-xl hover:text-white'>
                <Link to="/storage">Almacen</Link>
              </li>
              <li className='hover:bg-red-400 text-xl p-2 rounded-xl hover:text-white'>
                <Link to="/users">Usuarios</Link>
              </li>
              <li className='hover:bg-red-400 text-xl p-2 rounded-xl hover:text-white'>
                <Link to="/profile">Perfil</Link>
              </li>
              <li className='hover:bg-red-400 text-xl p-2 rounded-xl hover:text-white'>
                <Link to="/exit">Salir</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/exit" element={<Exit />} />
        </Routes>
      </div>
    </Router>
    <Footer />
    </>
  )
}

export default App
