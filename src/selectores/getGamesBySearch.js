export const getGamesBySearch = (criterion = "", gameCollection) => {
    
    if (criterion === ''){
        return [];
    }
    
    return gameCollection.filter(juego => juego.name.toLowerCase().includes(criterion.toLowerCase()));
}