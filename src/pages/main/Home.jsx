import React from 'react';

import ChisteComp from '../../components/home/ChisteComp';
import PokemonDelDia from '../../components/home/PokemonDelDia';

const Home = () => {
  return (
    <>
      <main className="flex flex-col justify-center text-center bg-amber-200 pt-3 gap-4 pb-8">

        <h1 className='text-4xl sm:text-5xl font-bold'>Bienvenido a PocketDex</h1>

        <div>
          <img
            className='block mx-auto h-40 sm:h-48 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out'
            src="/img/rec/tortank-pokémon.webp"
            alt="imagen blastoise shiny"
            id="red"
          />
        </div>

        <div>
          <h2 className='font-semibold text-lg sm:text-2xl'>Esta pagina consiste en un portal de gestión de tus Pokémon.</h2>
          <h2 className='font-semibold text-lg sm:text-2xl'>Este portal tiene las secciones de:</h2>
          <ul className='font-semibold text-lg sm:text-2xl underline leading-8 sm:leading-10 mb-4'>
            <li><h3>Almacenamiento</h3></li>
            <li><h3>Foro</h3></li>
            <li><h3>Otros Usuarios</h3></li>
            <li><h3>Perfil</h3></li>
          </ul>
        </div>

        <div className='bg-amber-100 lg:m-auto m-4 rounded-2xl p-4 lg:w-4xl'>
          <h2 className='font-bold text-2xl sm:text-3xl underline'>Almacenamiento</h2>
          <h3 className='font-semibold my-5 text-sm sm:text-base'>
            Sección que permite la gestión de las criaturas de cada uno. 
            Esta sección nos permite la introducción, visualización, modificación y la eliminación de los Pokémon.
          </h3>
          <div>
            <img
              className='block mx-auto rounded-2xl hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out max-w-full object-contain'
              src="/img/rec/almacenamiento.webp"
              alt="imagen squad"
            />
          </div>
        </div>

        <div className='bg-amber-100 lg:m-auto m-4 rounded-2xl p-4 lg:w-4xl'>
          <h2 className='font-bold text-2xl sm:text-3xl underline'>Foro</h2>
          <h3 className='font-semibold my-5 text-sm sm:text-base'>
            Sección que permite la comunicación y expresión entre usuarios. 
            Esta sección nos permite poner posts y escribir respuestas a posts de otros usuarios.
          </h3>
          <div>
            <img
              className='block mx-auto rounded-2xl hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out object-contain'
              src="/img/rec/i-will-get-you.webp"
              alt="imagen battle"
            />
          </div>
        </div>

        <div className='bg-amber-100 lg:m-auto m-4 rounded-2xl p-4 lg:w-4xl'>
          <h2 className='font-bold text-2xl sm:text-3xl underline'>Otros Usuarios</h2>
          <h3 className='font-semibold my-5 text-sm sm:text-base'>
            Sección que nos permite la visualización de los usuarios que utilizan el portal. 
            Podremos visualizar los datos de cada usuario y su equipo.
          </h3>
          <div>
            <img
              className='block mx-auto rounded-2xl hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out object-contain'
              src="/img/rec/entrenadores.webp"
              alt="imagen trainers"
            />
          </div>
        </div>

        <div className='bg-amber-100 lg:m-auto m-4 rounded-2xl p-4 lg:w-4xl'>
          <h2 className='font-bold text-2xl sm:text-3xl underline'>Perfil</h2>
          <h3 className='font-semibold my-5 text-sm sm:text-base'>
            Sección que nos permite la gestión o visualización de los datos del usuario.
            En esta sección también se puede gestionar el equipo personal Pokémon que tenemos.
          </h3>
          <div>
            <img
              className='block mx-auto h-40 sm:h-48 hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out object-contain'
              src="/img/rec/pokemon-red-red-sprite.webp"
              alt="imagen red"
            />
          </div>
        </div>

        <div className='bg-amber-100 lg:m-auto m-4 rounded-2xl p-4 lg:w-4xl'>
          <PokemonDelDia />
        </div>

        <div className='bg-amber-100 lg:m-auto m-4 rounded-2xl p-4 lg:w-4xl'>
          <ChisteComp />
        </div>

      </main>
    </>
  );
};

export default Home;
