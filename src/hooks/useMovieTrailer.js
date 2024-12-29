import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CONSTANTS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailer = (movieId)=>{
    
    const dispatch =useDispatch();
    const getMovieVideo = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_CONSTANTS);
        const response = await data.json();
      
        const filterVideo= response?.results?.filter(video=>video.type==="Trailer");
       const trailer = filterVideo?.length ?filterVideo[0] :response.results[0]  ;
        dispatch(addTrailerVideo(trailer.key));
    }
    useEffect(()=>{
        getMovieVideo();
    },[])
}
export default useMovieTrailer;