export default function Footer() {
    return (
      <footer className="bg-stone-800 flex flex-col text-white text-sm p-4">
        {/* Enlaces legales */}
        <div className="flex flex-col lg:flex-row justify-center gap-4 text-center lg:text-left mb-4">
          <h4 className="hover:underline cursor-pointer">Aviso Legal</h4>
          <h4 className="hover:underline cursor-pointer">Política de Privacidad</h4>
          <h4 className="hover:underline cursor-pointer">Política de Cookies</h4>
          <h4 className="hover:underline cursor-pointer">Canal de Denuncias</h4>
        </div>
  
        {/* Mensaje de cookies y copyright */}
        <div className="flex flex-col text-center my-3">
          <h4>Este sitio web utiliza cookies para mejorar tu experiencia de usuario. Al continuar navegando, aceptas nuestra Política de Cookies.</h4>
          <p>Copyright ©PocketDex 2024</p>
        </div>
  
        {/* Redes sociales */}
        <div className="flex flex-row justify-center gap-4 flex-wrap">
          <a href="https://x.com/javieraxedo">
            <img src="/img/rec/twitter.webp" alt="imagen twitter" className="w-8 h-8 hover:scale-110 transition transform duration-300" />
          </a>
          <a href="https://www.instagram.com/lordxavi97">
            <img src="/img/rec/instagram.webp" alt="imagen instagram" className="w-8 h-8 hover:scale-110 transition transform duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/javier-acedo-caballero-5707562b8/">
            <img src="/img/rec/linkedin.webp" alt="imagen linkedin" className="w-8 h-8 hover:scale-110 transition transform duration-300" />
          </a>
          <a href="https://github.com/L0rdxavi97">
            <img src="/img/rec/github.webp" alt="imagen github" className="w-8 h-8 hover:scale-110 transition transform duration-300" />
          </a>
        </div>
      </footer>
    );
  }
  