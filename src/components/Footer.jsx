

export default function Footer(){
    return (
        <footer className="bg-stone-800 flex flex-col text-white text-sm ">
            <div className="flex flex-row justify-center gap-2">
                <h4>Aviso Legal</h4>
                <h4>Politica de Privacidad</h4>
                <h4>Politica de Cookies</h4>
                <h4>Canal de Denuncias</h4>
            </div>
            <div className="flex flex-col text-center my-3">
                <h4>Este sitio web utiliza cookies para mejorar tu experiencia de usuario. Al continuar navegando, aceptas nuestra Política de Cookies.</h4>
                <p>Copyright ©PocketDex 2024</p>
            </div>
            <div className="flex flex-row justify-center">
                <a href="https://x.com/javieraxedo"><img src="/img/rec/twitter.png"  alt="imagen twitter"/></a>
                <a href="https://www.instagram.com/lordxavi97"><img src="/img/rec/instagram.png" alt="imagen instagram"/></a>
                <a href="https://www.linkedin.com/in/javier-acedo-caballero-5707562b8/"><img src="/img/rec/linkedin.png" alt="imagen linkedin"/></a>
                <a href="https://github.com/L0rdxavi97"><img src="/img/rec/github.png"  alt="imagen github"/></a>
            </div>
        </footer>
    )
}