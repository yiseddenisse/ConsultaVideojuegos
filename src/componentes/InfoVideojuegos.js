import React from "react";

export const InfoVideojuegos = ({Juego: {nombre, imagen, rating, metacritic}}) => {
    return(
       <>
            <div className="card" style= {{width: "380px"}}>
                <img src={imagen} className="card-img-top" alt={nombre}></img>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text"> Rating: {rating}</p>
                    <p className="card-text"> Metacritic: {metacritic}</p>
                </div>
            </div>
       </>
        
    )
}