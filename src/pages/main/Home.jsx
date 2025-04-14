import React from 'react';

import ChisteComp from '../../components/home/ChisteComp';
import PokemonDelDia from '../../components/home/PokemonDelDia';

const Home = () => {
  return (
    <>
    <main className="flex flex-col justify-center text-center bg-amber-200 pt-3 gap-8 pb-8">
        
        /*  El genio detrás de Pokémon, Satoshi Tajiri, era coleccionista de insectos en su infancia. 
        Así que, básicamente, Pokémon es el resultado de su amor por los bichitos. ¡Hazte con todos, toma un nuevo significado! */
        <h1 className='text-5xl font-bold'>Bienvenido a PocketDex</h1>
        <div>
            <img className='justify-self-center h-40 hover:-translate-y-1 hover:scale-130 transition delay-150 duration-300 ease-in-out' src="/img/rec/tortank-pokémon.gif" alt="imagen blastoise shiny" id="red"/>
        </div>
        <div>
            <h2 className='font-semibold text-2xl'>Esta pagina consiste en un portal de gestion de tus Pokémon.</h2>
            <h2 className='font-semibold text-2xl'>Este portal tiene las secciones de:</h2>
            <ul className='font-semibold text-2xl underline leading-10 mb-4'>
                <li><h3>Almacenamiento</h3></li>
                <li><h3>Foro</h3></li>
                <li><h3>Otros Usuarios</h3></li>
                <li><h3>Perfil</h3></li>
            </ul>
            
        </div>
        <div className='bg-amber-100 lg:m-auto m-8 rounded-2xl p-3 lg:w-4xl'>
            <h2 className='font-bold text-3xl underline'>Almacenamiento</h2>
            <h3 className='font-semibold my-5'>Seccion que permite la gestion de las criaturas de cada uno. 
                Esta seccion nos permite la introduccion, visualizacion, modificacion y la eliminacion de los Pokémon.</h3>
                <div>
                    <img className='justify-self-center rounded-2xl hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out max-w-150' src="/img/rec/almacenamiento.jpeg" alt="imagen squad"/>
                </div>
        </div>
        <div className='bg-amber-100 lg:m-auto m-8 rounded-2xl p-3 lg:w-4xl'>
            <h2 className='font-bold text-3xl underline'>Foro</h2>
            <h3 className='font-semibold my-5'>Seccion que permite la comunicacion y expresión entre usuarios. 
                Esta seccion nos permite poner posts y escribir respuestas a posts de otros usuarios.</h3>
                <div>
                    <img className='justify-self-center rounded-2xl hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out' src="/img/rec/i-will-get-you.gif" alt="imagen battle"/>
                </div>
        </div>
        <div className='bg-amber-100 lg:m-auto m-8 rounded-2xl p-3 lg:w-4xl'>
            <h2 className='font-bold text-3xl underline'>Otros Usuarios</h2>
            <h3 className='font-semibold my-5'>Seccion que nos permite la visualizacion de los usuarios que utilizan el portal. 
                Podremos visualizar los datos de cada usuario y su equipo.
            </h3>
            <div>
                <img className='justify-self-center rounded-2xl hover:-translate-y-1 hover:scale-110 transition delay-150 duration-300 ease-in-out' src="/img/rec/entrenadores.gif" alt="imagen trainers"/>
            </div>
        </div>
        <div className='bg-amber-100 lg:m-auto m-8 rounded-2xl p-3 lg:w-4xl'>
            <h2 className='font-bold text-3xl underline'>Perfil</h2>
            <h3 className='font-semibold my-5'>Seccion que nos permite la gestion o visualizacion de los datos del usuario.
                En esta seccion tambien se puede gestionar el equipo personal Pokémon que tenemos.
            </h3>
            <div>
                <img className='justify-self-center h-40 hover:-translate-y-1 hover:scale-130 transition delay-150 duration-300 ease-in-out' src="/img/rec/pokemon-red-red-sprite.gif" alt="imagen red"/>
            </div>
        </div>
        <div className='bg-amber-100 lg:m-auto m-8 rounded-2xl p-3 lg:w-4xl'>
            <PokemonDelDia/>
        </div>
        <div className='bg-amber-100 lg:m-auto m-8 rounded-2xl p-3 lg:w-4xl'>
            <ChisteComp/>
        </div>
    </main>
    </>
  );
};

export default Home;
