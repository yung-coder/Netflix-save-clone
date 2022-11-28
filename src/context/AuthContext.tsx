import { AuthError, User, UserCredential } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../client";
type Contextype = {
    children: React.ReactNode;
}
export type UserConeextType = {
  isUser: boolean,
  setisUser:  React.Dispatch<React.SetStateAction<boolean>>,

};

export const AuthContext = createContext<null | UserConeextType>( null);

export function AuthContextProvider({ children }: Contextype) {
  const [isUser , setisUser] = useState(false);
  return (
    <AuthContext.Provider value={{ isUser , setisUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
