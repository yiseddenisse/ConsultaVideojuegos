import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
//React Router implementa un hook llamado useNavigate que nos va permitir movernos por las páginas y hacer
//redirecciones.
import { useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { GameScreen } from '../games/GameScreen'
import { useForm } from '../../hooks/useForm'
import { getGamesBySearch } from '../../selectores/getGamesBySearch'

let collection = JSON.parse(localStorage.getItem("Videogames"))

console.log("col", collection)

export const BuscadorScreen = () => {
    
    //Utilizamos el hook 'useLocation' para obtener la informació de la ubicación en la que
  //se encuentra el usuario en la aplicación.
    const location = useLocation();
    const { search = "" } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchCriterion: ''
    });

    const { searchCriterion } = formValues

    const filteredGames = useMemo(() => getGamesBySearch(search, collection), [search])

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchCriterion)
        navigate(`?search=${searchCriterion}`);
    }

    return (
        <>
            <h1>Buscador</h1>
            <br />
            <div className="row">
                <div className="col-5">
                    <h4>Mi busqueda</h4>
                    <br />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            className="form-control"
                            name="searchCriterion"
                            value={searchCriterion}
                            onChange={handleInputChange}
                            autoCorrect='off'
                        />
                        <button type="submit"
                            className="btn m-1 btn-block btn-outline-primary">
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>
                        Resultado
                    </h4>
                    <br />

                    {
                        (search === '')
                        &&
                        <div className="alert alert-info">
                            Indica el criterio de busqueda
                        </div>
                    }
                    {
                        (search !== '' && filteredGames.length === 0)
                        &&
                        <div className="alert alert-danger">
                            No existe el juego: {search}
                        </div>
                    }

                    {//Recorremos el resultado de la búsqueda de los juegos.
                        filteredGames.map(juego => {
                            return <GameScreen
                                key={juego}
                                gameID={juego.id}
                            >
                            </GameScreen>
                        })
                    }
                </div>
            </div>
        </>)
}