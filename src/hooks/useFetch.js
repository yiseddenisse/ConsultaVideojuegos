import {useState, useEffect} from "react"; 

export const useFetch = (url) => {
     
    const [videoGamestate, setVideogameState] = useState({
        info: null, 
        loading: true,
        error: null
    });


    useEffect(() => {
        fetch(url)
        .then((response) => {
            return response.json()

        })
        .then((info) =>{
            setVideogameState({
                info,
                loading: false, 
                error: null
            });
        console.log("La informacion: ", info)});

        return () => {
            setVideogameState({
                loading: true,
                error: null,
                info: null

            });
            
        }
        
    }, [url]);
    return videoGamestate
}