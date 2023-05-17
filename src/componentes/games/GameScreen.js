import React from 'react';
import loadingImage from "../../assets/cargando.gif"
import { useFetch } from '../../hooks/useFetch';
import { GameCollectionItem } from './GameCollectionItem';

export const GameScreen = ({gameID, handleDeleteGame, addGame}) =>{

    const oldGames = JSON.parse(localStorage.getItem("Videogames"))

    const {loading, info} = useFetch(`https://api.rawg.io/api/games/${gameID}?key=3ff088a4b1e64ee8b9f1c0ef357c1942`)

    let action = null;

    let juego = {}

    if(!!info && info){
        juego.id = info.id 
        juego.name = info.name
        juego.image = info.background_image 
        juego.rating = info.rating
        juego.metacritic = info.metacritic
        
        oldGames.map(oldGame => {
            if(oldGame.id == juego.id){
                oldGame.name = juego.name
                oldGame.image = juego.image
                oldGame.rating = juego.rating
                oldGame.metacritic = juego.metacritic
            }
        })
        localStorage.setItem('Videogames', JSON.stringify(oldGames))
    }



    action = {
        type: "add",
        payload: juego
    }

        return (
            <>
            <div className = "container d-flex flex-row">
            {
                loading
                ?
                (<img src = {loadingImage} alt = "loading thingy" style = {{scale:"50%", alignSelf: 'center'}}></img>
                )
                :
                <GameCollectionItem Juego={juego} gameID = {gameID} handleDeleteGame = {handleDeleteGame}></GameCollectionItem>
            }
             </div>
            </>)
   
}