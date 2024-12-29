import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchar = ()=>{
  const langKey = useSelector(store=>store.config.lang)
    return(
      <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
            <input type="text" placeholder={lang[langKey].placeholder} className="p-4 m-4 col-span-9" />
            <button className="col-span-3 m-4 px-4 py-2 bg-red-700 text-white rounded-lg ">{lang[langKey].search}</button>
        </form>

      </div>
    )
}
export default GptSearchar;