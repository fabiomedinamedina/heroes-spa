import { useState } from "react";
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();

  const loginUser = ( newUser ) => {
    setUser( newUser )
  }
  

  return (
    <UserContext.Provider value={{ user,  loginUser }}>
      { children }
    </UserContext.Provider>
  );
};
