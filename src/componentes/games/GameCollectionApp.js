import React, { useEffect, useReducer} from 'react';
import { GameScreen } from './GameScreen';
import { gamesReducer } from '../../hooks/gamesReducer';
import { useForm } from '../../hooks/useForm';

const init = () => {return JSON.parse(localStorage.getItem("Videogames")) || [];}

export const GameCollectionApp = () => {

    const [videogameState, dispatch] = useReducer(gamesReducer, [], init)

    const [{gameID}, handleInputChange, reset] = useForm({})

    useEffect(() => {
        localStorage.setItem('Videogames', JSON.stringify(videogameState))
    }, [videogameState])


    const handleAddGame = (e) => {
        e.preventDefault()

        if(gameID.trim().length === 0){
            return
        }
        const juego = {
            id: gameID
        }
        const action = {
            type: 'add',
            payload: juego
        }
        dispatch(action);
        reset();
    }

    const addGame = (juego) =>{
        const action = {
            type: 'add', 
            payload: juego
        }
    }

    const handleDeleteGame = (gameID) => {
        const action = {
            type: 'delete',
            payload: gameID
        }
        dispatch(action)
    }

    return(
        
        <>
            <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-4">Gamebook</h1>
                                <p className="lead">Busca juegos por ID para agregarlos a la coleccion</p>
                            </div>
            </div>

            <form onSubmit = {handleAddGame}>
                <input name = "gameID" type = "text" className = "form-control" placeholder='Ingresa ID del juego' value = {gameID} onChange={handleInputChange}>

                </input>
                <button type = "submit" className='btn btn-outline-primary mt-1 btn-block'>Agregar</button>
            </form>

            <ol className="list-group list-group-numbered">
            <div className = "d-flex flex-row">
                {
                    videogameState.map(juego => {
                        return <GameScreen
                            key={juego.id}
                            gameID={juego.id}
                            handleDeleteGame = {handleDeleteGame}
                            addGame = {addGame}
                        />
                    })
                }
             </div>
            </ol>
        </>
    )

}