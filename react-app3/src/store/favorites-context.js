import {createContext, useContext, useState} from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup)=>{},
    removeFavorite: (meetupId)=>{},
    isFavorite: (meetupId)=>{}
});

export function FavoritesContextProvider({children}) {

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup);
        })
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.filter(fav => fav.id !== meetupId);
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(fav => fav.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: itemIsFavoriteHandler,
    };

    return (
        <FavoritesContext.Provider value={context}>
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;