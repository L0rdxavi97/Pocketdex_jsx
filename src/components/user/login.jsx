import { useAuth } from "../../hooks/login/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    // simular datos de usuario
    const user = {
      id: 1,
      name: "Guada",
      email: "guada@email.com",
    };

    login(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Login</button>
    </form>
  );
};
