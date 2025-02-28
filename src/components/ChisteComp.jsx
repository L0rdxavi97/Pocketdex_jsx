

export default function ChisteComp(chiste, ContarChiste){
    console.log(chiste)
    if(chiste.type == 'single'){
        return(
            <div className='bg-amber-100 lg:m-auto m-8 rounded-2xl p-3'>
                <h2 className='font-bold text-3xl underline'>Chiste aleatorio</h2>
                <div id="chiste">
                    {}
                </div>
                <button id="btn-chiste" className='bg-red-400 text-2xl p-1 text-white rounded-2xl' onClick={()=>ContarChiste}>Otro Chiste</button>
            </div>
        )
    }

    if(chiste.type == 'twopart'){
        return(
            <div className='bg-amber-100 lg:m-auto m-8 rounded-2xl p-3'>
                <h2 className='font-bold text-3xl underline'>Chiste aleatorio</h2>
                <div id="chiste">
                    {}
                </div>
                <button id="btn-chiste" className='bg-red-400 text-2xl p-1 text-white rounded-2xl' onClick={()=>ContarChiste}>Otro Chiste</button>
            </div>
        )
    }

    else{
        return(
            <div className='bg-amber-100 lg:m-auto m-8 rounded-2xl p-3'>
                <h2 className='font-bold text-3xl underline'>Chiste aleatorio</h2>
                <div id="chiste">
                    Error en cargar..
                </div>
                <button id="btn-chiste" className='bg-red-400 text-2xl p-1 text-white rounded-2xl' onClick={()=>ContarChiste}>Otro Chiste</button>
            </div>
        )
    }
    
}