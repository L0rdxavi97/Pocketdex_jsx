
import { useEffect, useState } from "react"

export const useHome = () =>{

    const initialChiste = () =>{
        fetch('https://v2.jokeapi.dev/joke/Any?lang:es')
            .then(res => res.json())
            .then((result) =>{
                return result;
            })
    }

    const [chiste,setchiste] = useState(initialChiste)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    function ContarChiste(){
        useEffect(() => {
            fetch('https://v2.jokeapi.dev/joke/Any?lang:es')
            .then(res => res.json())
            .then((result) =>{
                setIsLoaded(true); 
                setchiste(result);
            },
            (error) =>{
                setIsLoaded(false);
                setError(error);
            } );
        }, [])
    }
    return{
        chiste,
        ContarChiste
    }
}