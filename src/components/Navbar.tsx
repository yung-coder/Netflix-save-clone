import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../client";
import { UserAuth } from "../context/AuthContext";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const { isUser, setisUser }: any = UserAuth();
  const [signOut, loading, error] = useSignOut(auth);
  const [user] = useAuthState(auth);
  if (error) {
    console.log(error);
  }
  return (
    <div className="flex justify-between p-2 md:p-10 absolute w-full z-[100]">
      <Link to="/">
        <h1 className="text-[#E50914] font-bold text-3xl md:text-6xl">
          NETFLIX
        </h1>
      </Link>
      {user ? (
        <>
          <div className="flex space-x-5 md:space-x-10">
            <Link to="/Account">
              <button className="text-white md:text-xl  mt-2  md:p-4">
                Account
              </button>
            </Link>
            <button
              className="bg-red-700 px-2 text-white rounded-md md:text-xl md:px-1"
              onClick={async () => {
                const success = await signOut();
                if (success) {
                  setisUser(false);
                  alert("You are sign out");
                }
              }}
            >
              Signout
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex space-x-5 md:space-x-10">
            <Link to="/Signin">
              <button className="text-white md:text-xl p-2">SignIn</button>
            </Link>
            <Link to="/Signup">
              <button className="bg-red-700 p-2 text-white rounded-md md:text-xl md:p-4">
                SignUp
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
