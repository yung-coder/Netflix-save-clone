import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../client";
import { UserAuth } from "../context/AuthContext";

type SigninProps = {};

const Signin: React.FC<SigninProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const { setisUser }: any = UserAuth();

  if (user) {
    navigate("/");
  }

  const OnSigin = () => {
    signInWithEmailAndPassword(email, password);
    setisUser(true);
  };

  return (
    <div className="absolute  w-full h-screen   flex justify-center items-center ">
      <img
        className="hidden sm:block absolute w-full h-full object-cover opacity-100"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>

      <div className="bg-grey-lighter h-96 flex flex-col z-50">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="backdrop-brightness-50 px-8 py-20 rounded shadow-md text-white w-full">
            <h1 className="mb-8 text-3xl">Sign In</h1>

            <input
              type="text"
              className="p-3  my-2 bg-gray-700 rouded w-full"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="p-3 my-2 bg-gray-700 rouded w-full"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {loading ? (
              <>
                <div className="flex justify-center items-center bg-red-600 p-2">
                  <div
                    className="spinner-border animate-spin inline-block w-7 h-7 border-4 rounded-full"
                    role="status"
                  ></div>
                </div>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green text-white bg-red-600 hover:bg-green-dark focus:outline-none my-1"
                  onClick={OnSigin}
                >
                  SignIn
                </button>
              </>
            )}
            <div className="flex justify-between items-center text-sm text-gray-600 p-5">
              <p>
                <input className="mr-2" type="checkbox" />
                Remember me
              </p>
              <p>Need Help?</p>
            </div>
            <p className="p-3">
              <span className="text-gray-500">New to Netflix?</span>{" "}
              <Link to="/Signup">Sign Up</Link>
            </p>
            {error ? (
              <>
                <div className="p-5">
                  <p>{error.message}</p>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
