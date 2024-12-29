import Header from "./Header";
import useGetMoviesList from "../hooks/useGetMoviesList";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import {useSelector} from "react-redux";
import GptSearch from "./GptSearch";

export function Browse(){
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
    useGetMoviesList();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return(
        <>
         <Header />
         {showGptSearch ?<GptSearch />: <>

            <MainContainer />
         <SecondaryContainer />
         </>}
        </>
       
    )
}