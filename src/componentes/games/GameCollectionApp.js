import React, {useEffect, useReducer, useState} from 'react';
import { GameScreen } from './GameScreen';
import { gamesReducer } from '../../hooks/gamesReducer';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8586/videojuegos';

const init = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/usr_1`);
        if (!response.ok) {
            throw new Error('Error fetching data');
        }
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error('Error fetching data:', error);

    }
}

export const GameCollectionApp = () => {

    const [videogameState, dispatch] = useReducer(gamesReducer, [],init)

    const [{gameID}, handleInputChange, reset] = useForm({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);




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
            {/* Display loading message while data is being fetched */}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {/* Display error state */}
                    {error && <p>{error}</p>}
                    {/* Display the fetched data */}
                    {Array.isArray(videogameState) && videogameState.length === 0 ? (
                        <p>No games found.</p>
                    ) : (
                        <ol className="list-group list-group-numbered">
                            {console.log(videogameState.length)}
                            <div className="d-flex flex-row">
                                {videogameState && videogameState.map((juego) => (
                                    <GameScreen
                                        key={juego.id}
                                        gameID={juego.id}
                                        handleDeleteGame={handleDeleteGame}
                                        addGame={addGame}
                                    />
                                ))}
                            </div>
                        </ol>
                    )}
                </>
            )}
        </>
    );
};

export default GameCollectionApp;










