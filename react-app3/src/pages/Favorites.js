import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";


function FavoritesPage() {
    const favContext = useContext(FavoritesContext)


    return (
        <section>

            <h1 style={{marginTop: '6rem'}}>Favorites</h1>
            {favContext.totalFavorites === 0 ?
                (<p> No favorites yet. </p>)
                : (<MeetupList meetups={favContext.favorites}/>
                )}
        </section>
    );
}

export default FavoritesPage;