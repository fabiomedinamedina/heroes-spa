import { useReducer } from 'react';
import { AuthContext, authReducer } from './'

import { types } from '../types/types';

const initialState = {
  logged: false,
}

export const AuthProvider = ({ children }) => {

  const [ authState, authDispatch ] = useReducer( authReducer , initialState);

  const loginUser = ( name = '', email = '' ) => {
    const action = {
      type: types.login,
      payload: {
        name: name,
        email: email,
      }
    }

    authDispatch( action )
  }

  const logoutUser = () => {
    const action = {
      type: types.logout,
    }
    authDispatch( action ) ;
  }

  return (
    <AuthContext.Provider value={{ ...authState, loginUser, logoutUser  }}>
      { children }
    </AuthContext.Provider>
  );
};
