

export default function PostForm(){
    return (
        <form className="bg-amber-100 p-4 rounded-xl w-80 mx-auto shadow-md">
        <p className="mb-4">
          <label htmlFor="tit" className="block font-semibold">Título</label>
          <input
            type="text"
            id="tit"
            className="w-full p-2 border border-black rounded-xl bg-white"
            placeholder="Escribe el título"
          />
        </p>
        <p className="mb-4">
          <label htmlFor="main" className="block font-semibold">Contenido</label>
          <textarea
            id="main"
            className="w-full p-2 border border-black rounded-xl bg-white"
            placeholder="Escribe el contenido"
          />
        </p>
        <p className="text-center">
          <button className="text-white p-2 bg-cyan-500 hover:bg-cyan-600 rounded-xl mt-3">
            Enviar
          </button>
        </p>
      </form>
    )
}