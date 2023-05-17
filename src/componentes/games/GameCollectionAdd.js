import React from "react"
import { useFetch } from "../../hooks/useFetch"
import { useForm } from "../../hooks/useForm"

export const GameCollectionAdd = ({setGameArray, handleAddGame}) =>{

    const [{gameToAddID}, handleInputChange, reset] = useForm({})

    const {loading, info} = useFetch(`https://api.rawg.io/api/games/${gameToAddID}?key=3ff088a4b1e64ee8b9f1c0ef357c1942`)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Juego agregado id ${gameToAddID}`)

        if(gameToAddID.trim() != 0  && gameToAddID.match(/^[0-9]+$/) != null){
            setGameArray(previousGames => [juego, ...previousGames])
            console.log("nuevo", juego)
            handleAddGame(juego)
            reset()
    }}

    let juego = {}

    if(!!info && info){
        juego.id = info.id 
        juego.name = info.name
        juego.image = info.background_image 
        juego.rating = info.rating
        juego.metacritic = info.metacritic
    }

    return (
            <form onSubmit={handleSubmit}>
                <div className = "input-group input-group-sm mb-3">
                    <input
                        type = "text"
                        name = "gameToAddID"
                        autoComplete="off"
                        placeholder="Type game ID"
                        value = {gameToAddID}
                        onChange = {handleInputChange}
                        className="form-control">
                    </input>
                    <button
                        type = "submit"
                        className = "btn btn-outline-primary mt-1 btn-block"
                        value = "Add game to my collection">
                    Agregar
                    </button>
                </div>
            </form>
    )

}