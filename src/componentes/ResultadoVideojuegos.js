import React from 'react';
import { InfoVideojuegos } from './InfoVideojuegos';
import { useFetch } from '../hooks/useFetch';
import loadingImage from "../assets/cargando.gif"

//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWG
export const ResultadoVideojuegos = ({ genero }) => {

    //Invocamos el api de RAWG para obtener los videojuegos del género proporcionado en los parámetros del
    // componente.
    //Llamar al custom hook use fetch para invocar la página de rawg
    const {loading, info} = useFetch(`https://api.rawg.io/api/games?key=3ff088a4b1e64ee8b9f1c0ef357c1942&genres=${genero}`) 
    
    const {results} = !!info && info; 

    let juegos;

    //Obtenemos solamente la información que vamos a necesitar del json de la respuesta.
    if(!!results && results){
            juegos = results.map(juego => {
            return {
                    id: juego.id,
                    nombre: juego.name,
                    imagen: juego.background_image,
                    rating: juego.rating,
                    metacritic: juego.metacritic
                }
            })
            console.log(juegos)
    }

    return (
        <>
        {
            loading 
            ?
            (<img src = {loadingImage} alt = "loading thingy" style = {{scale:"50%", alignSelf: 'center'}}></img>
            )
            :
            <div className = "row"> 
                <h3 className="card-title">{genero}</h3>
                    {juegos.map(juego =>{
                    return(
                        <InfoVideojuegos key = {juego["id"]} Juego={juego}></InfoVideojuegos>
                    )
                    })
                    }
            </div>
        }
        </>
    )}