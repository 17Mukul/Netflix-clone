import GptSearchar from "./GptSearchBar";
import Netflxbg from "../Images/NetflixBg.jpg"
const GptMovieSuggestion = ()=>{
    return(
        <> 
         <div className="absolute -z-10">
        {" "}
        <img src={Netflxbg} alt="Not found" />
      </div>
        <GptSearchar />
        </>
    )
}
export default GptMovieSuggestion;