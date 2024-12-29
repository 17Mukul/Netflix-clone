import MovieCard from "./MovieCard"
const MoviesList =({title,movies})=>{
   
    return(
        <div className="px-6 ">
           
                <h1 className="text-3xl font-bold py-4 text-white">{title}</h1>
                <div className="flex overflow-x-scroll">
        <div className="flex">  
           {movies.map((movie)=>(
            <MovieCard posterpath={movie.poster_path} key={movie.id}/>
           ))}
        </div>
        </div>
        </div>
    )
}
export default MoviesList;