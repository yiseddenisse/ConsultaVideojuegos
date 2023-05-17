import React from "react"
import { GameCollectionItem } from "./GameCollectionItem"

export const GameCollection = (juego) =>{
    return(
        <div className = "d-flex flex-row">
            {
                <GameCollectionItem key = {juego["id"]} Juego={juego}></GameCollectionItem>
            }
        </div>
    )

}