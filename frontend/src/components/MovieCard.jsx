
function MovieCard({movie}) {

    function onFavoriteBtn() {
        alert("clicked")
    }

    return <div className = "movie-card">
        <div className = "movie-poster">
            <img src = {movie.url} ult = {movie.title} />
        </div>
        
        <div classname = "movie-overlay">
            <button className = "favorite-btn" onClick = {onFavoriteBtn}>
                ♥
            </button>
        </div>

        <div className = "movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard