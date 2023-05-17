import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { VideojuegosApp } from '../VideojuegosApp';
import { Navbar } from '../componentes/comunes/Navbar';
import { GameCollectionApp } from '../componentes/games/GameCollectionApp';
import { BuscadorScreen } from '../componentes/buscador/BuscadorScreen';


export const GamesRouter = () => {
    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route exact path="/BusquedaGenero" element={<VideojuegosApp />} />
                    <Route exact path="/GameCollectionApp" element={<GameCollectionApp />} />
                    <Route exact path = "/BuscarColeccion" element = {<BuscadorScreen/>}/>
                    <Route
                        path="*"
                        element={<Navigate to="/GameCollectionApp" replace />}
                    />
                </Routes>
            </div>
        </>
    )
}