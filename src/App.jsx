import React from 'react';
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
/* import Login from './pages/previous/Login.jsx';
import CreateUser from './pages/previous/CreateUser.jsx'; */

function App() {

  return (
    <>
     <TituloPagina/>
     <Router>
      <div>
        <header className='relative bg-cyan-700 flex lg:flex-row flex-col items-center justify-between py-3 shadow-md inset-shadow-amber-200'>
          <Link to="/"><img className='w-100 mx-1 bg-cyan-600 bg rounded-2xl shadow-[0_0_15px_6px_rgba(0,200,200,0.5)]' src="/img/rec/logo.webp" alt=""/></Link>
          <nav className='items-center'>
            <ul className='flex flex-row align-middle gap-2 m-2'>
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
        </header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/storage/:PokeName" element={<CreaturePage />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/exit" element={<Exit />} />
          {/* <Route path="/login" element={<Login />} />
          .<Route path="/create-user" element={<CreateUser />} /> */}
        </Routes>
      </div>
    </Router>
    <Footer />
    </>
  )
}

export default App
