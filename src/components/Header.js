import Logo from "./../Images/Logo.png";
import usericon from "../Images/usericon.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import {toggleGptSearchView} from "../utils/gptSlice"
import {SUPPORTED_LANGUAGES} from "../utils/constant"
import {changeLanguage} from "../utils/configSlice"
import {showGptSearch} from "../utils/gptSlice"
const Header = () => {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  console.log(showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(()=>{

    const unSubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
    
          const {uid,email,displayName} = user;
          // ...
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          navigate("/browse");
          
        } else {
          dispatch(removeUser());
          navigate("/");
         
        }
      });
      return(()=>unSubscribe())
},[]);
const handleToggleGptView =()=>{
  dispatch(toggleGptSearchView());
}
const handleLanguageChange = (e)=>{
  dispatch(changeLanguage(e.target.value));
}
  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-22 h-12 bg-black" src={Logo} alt="logo" />
      {user && (
        <div className="flex p-2">
        { showGptSearch && ( <select className="p-2 m-4 bg-gray-800 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=> <option value ={lang.identifier}>{lang.name}</option>
            )}

          </select>)}
          <button className="py-4 my-4 px-4 mx-3 bg-purple-800 rounded-md text-white" onClick={handleToggleGptView}>{showGptSearch ?"HomePage":"Gpt Search"}</button>
          <img className="w-11 h-11 my-5 " alt="User Icon" src={usericon} />
          <button
            onClick={handleSignOut}
            className="text-white font-bold right-4 "
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
