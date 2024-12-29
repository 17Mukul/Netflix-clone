import { IMG_CDN_URL } from "../utils/constant"
const MovieCard=({posterpath})=>{
    return(
        <div className="pr-4 w-48">
            <img src={IMG_CDN_URL+posterpath} alt="PosterImg" />
        </div>
    )
}
export default MovieCard;