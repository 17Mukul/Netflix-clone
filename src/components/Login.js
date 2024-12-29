import Header from "./Header";
import Netflxbg from "./../Images/NetflixBg.jpg";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  
  const dispatch=useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const response = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(response);
    if (response) return;
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const {uid,email,displayName} = auth.currentUser;
              // ...
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));

            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.response);
            });
         
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        {" "}
        <img src={Netflxbg} alt="Not found" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-3/12 bg-black  my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          ref={email}
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          type="password"
          ref={password}
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-4">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toogleSignInForm}>
          {isSignInForm
            ? "New to NetFlix? Sign Up Now"
            : "Already registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
