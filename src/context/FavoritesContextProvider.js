import React, { createContext, useContext, useState } from 'react';


export const favoritesContext = createContext();
export const useFavorite = () => useContext(favoritesContext);

const FavoritesContextProvider = ({children}) => {
    const [favorites, setfavorites] = useState(getFavorites());



    function getFavorites(){
        const fav = JSON.parse(localStorage.getItem("favorites"));
        if(!fav) {
            return [];
        }
        
        return fav;
    }

    function addToFavorites(obj){
        const fav = getFavorites();
        fav.push(obj)

        localStorage.setItem("favorites", JSON.stringify(fav));
    }

    function deleteFromFavorites(id){
        let fav = getFavorites();
        let res = fav.filter((item, index) => {
            if(item.id == id) return
            return item
        }) 
        localStorage.setItem("favorites", JSON.stringify(res));
    }

    function checkInFavorites(id){
        const fav = getFavorites();
        let check = false;

        fav.forEach((item, index) => {
            if(item.id == id) check = true;
            
        })
        
        return check;
    }
    
    const value = {
        favorites,
        getFavorites,
        checkInFavorites,
        addToFavorites,
        deleteFromFavorites,
    }

    return (
        <favoritesContext.Provider value={value}>
            {children}
        </favoritesContext.Provider>
    );
};

export default FavoritesContextProvider;