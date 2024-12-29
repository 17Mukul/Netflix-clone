import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
const SecondaryContainer = ()=>{
    const movies= useSelector(store=>store.movies)
    return (
        (movies.nowPlayingMovies && movies.popularMovies && movies.topRatedMovies && movies.upComingMovies && 
        <div className="bg-black">
            <div className="-mt-52 relative z-20 pl-12">
            <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MoviesList title={"Popular"} movies={movies.popularMovies} />
            <MoviesList title={"Top-Rated"} movies={movies.topRatedMovies} />
            <MoviesList title={"UpComing"} movies={movies.upComingMovies} />
            <MoviesList title={"New Released"} movies={movies.nowPlayingMovies} />
        </div>
        </div>
    ))
}
export default SecondaryContainer;