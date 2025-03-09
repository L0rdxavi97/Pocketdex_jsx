import React from 'react';

const Profile = () => {
  return (
    <div className="p-4 bg-amber-200 min-h-screen">
      <div className="text-center flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl font-bold">Mi Perfil</h1>
        <img
          className="max-h-50"
          src="/img/usuarios/default-user.jpg"
          alt="user img"
        />
        <p className="font-medium">Nombre: Juan Pérez</p>
      </div>
      <hr />
      <div className="my-3">
        <h2 className="text-xl font-bold text-center">Mi Equipo</h2>
        <div className="flex flex-wrap gap-7 justify-center p-3">
          <div className="p-4 bg-amber-100 rounded-2xl text-center">
            <img
              className="max-h-50"
              src="/img/criaturas/default-creature.jpg"
              alt="pokemon img"
            />
            <p className="font-bold text-xl underline">Pokemon</p>
          </div>
          <div className="p-4 bg-amber-100 rounded-2xl text-center">
            <img
              className="max-h-50"
              src="/img/criaturas/default-creature.jpg"
              alt="pokemon img"
            />
            <p className="font-bold text-xl underline">Pokemon</p>
          </div>
          <div className="p-4 bg-amber-100 rounded-2xl text-center">
            <img
              className="max-h-50"
              src="/img/criaturas/default-creature.jpg"
              alt="pokemon img"
            />
            <p className="font-bold text-xl underline">Pokemon</p>
          </div>
          <div className="p-4 bg-amber-100 rounded-2xl text-center">
            <img
              className="max-h-50"
              src="/img/criaturas/default-creature.jpg"
              alt="pokemon img"
            />
            <p className="font-bold text-xl underline">Pokemon</p>
          </div>
          <div className="p-4 bg-amber-100 rounded-2xl text-center">
            <img
              className="max-h-50"
              src="/img/criaturas/default-creature.jpg"
              alt="pokemon img"
            />
            <p className="font-bold text-xl underline">Pokemon</p>
          </div>
          <div className="p-4 bg-amber-100 rounded-2xl text-center">
            <img
              className="max-h-50"
              src="/img/criaturas/default-creature.jpg"
              alt="pokemon img"
            />
            <p className="font-bold text-xl underline">Pokemon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
