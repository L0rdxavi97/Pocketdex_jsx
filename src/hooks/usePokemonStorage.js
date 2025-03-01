import { useState } from "react"


export const usePokemonStorage = () => {

    const[storage, setStorage] = useState([]);

    function addStorage(item){
        setStorage([...storage,item]);
        
    }
    return{
        storage,
        addStorage
    }
}