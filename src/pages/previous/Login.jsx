import { useState } from "react";
import { useAuth } from "../../hooks/login/AuthContext";
import { useNavigate } from "react-router-dom"; // Cambié useHistory a useNavigate

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate(); // Ahora usamos useNavigate en lugar de useHistory
  
  // Estados para los campos del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Función para manejar el login
  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    login(user);
    navigate("/"); // Usamos navigate para redirigir al usuario al home después de hacer login
  };

  return (
    <div className="p-4 bg-amber-200 min-h-screen">
      <div className="text-center">
        <h2 className="text-center text-3xl font-bold underline mb-4">Login</h2>

        {/* Formulario de login */}
        <form onSubmit={handleLogin} className="flex flex-col items-center space-y-4">
          {/* Campo de nombre */}
          <div>
            <label htmlFor="name" className="block text-lg">Nombre</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Introduce tu nombre"
              className="p-2 rounded border mt-2 bg-amber-50"
            />
          </div>

          {/* Campo de correo */}
          <div>
            <label htmlFor="email" className="block text-lg">Correo electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Introduce tu correo"
              className="p-2 rounded border mt-2 bg-amber-50"
            />
          </div>

          {/* Campo de contraseña */}
          <div>
            <label htmlFor="password" className="block text-lg">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduce tu contraseña"
              className="p-2 rounded border mt-2 bg-amber-50"
            />
          </div>

          {/* Botón de submit */}
          <button
            type="submit"
            className="bg-cyan-600 p-2 rounded mt-4 text-white font-bold hover:bg-cyan-500 transition duration-300 cursor-pointer"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
