import React from 'react';

const Profile = () => {
  return (
    <div className="p-4 bg-amber-200 min-h-screen">
      {/* Pokémon tiene la bendición del Vaticano: Sí, lo has leído correctamente. 
      A principios de los 2000, cuando Pikachu estaba en sus uñas altas cotas de popularidad, algunos grupos religiosos lanzaron ataques contra Pokémon, acusándola de estar relacionado con rituales satánicos. 
      Por eso, el Vaticano bendijo oficialmente la franquicia. */}
      <div className="text-center flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl font-bold">Mi Perfil</h1>
        <img
          className="max-h-50"
          src="/img/rec/default-user.webp"
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
              src="/img/rec/default-creature.webp"
              alt="pokemon img"
            />
            <p className="font-bold text-xl underline">Pokemon</p>
          </div>
          <div className="p-4 bg-amber-100 rounded-2xl text-center">
            <img
              className="max-h-50"
              src="/img/rec/default-creature.webp"
              alt="pokemon img"
            />
            <p className="font-bold text-xl underline">Pokemon</p>
          </div>
          <div className="p-4 bg-amber-100 rounded-2xl text-center">
            <img
              className="max-h-50"
              src="/img/rec/default-creature.webp"
              alt="pokemon img"
            />
            <p className="font-bold text-xl underline">Pokemon</p>
          </div>
          <div className="p-4 bg-amber-100 rounded-2xl text-center">
            <img
              className="max-h-50"
              src="/img/rec/default-creature.webp"
              alt="pokemon img"
            />
            <p className="font-bold text-xl underline">Pokemon</p>
          </div>
          <div className="p-4 bg-amber-100 rounded-2xl text-center">
            <img
              className="max-h-50"
              src="/img/rec/default-creature.webp"
              alt="pokemon img"
            />
            <p className="font-bold text-xl underline">Pokemon</p>
          </div>
          <div className="p-4 bg-amber-100 rounded-2xl text-center">
            <img
              className="max-h-50"
              src="/img/rec/default-creature.webp"
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
