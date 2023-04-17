// Debe retornar el estado por defecto
// Debe de login llamar el login autenticar y establecer el usuario
// Debe de logut borrar el user y logged en false

import { authReducer, types } from '../../../src/auth/';


describe('Pruebas en authReducer', () => {

  const user = {
    name: 'Fabio Medina',
    email: 'fabio@fabiomedina.com'
  }

  const initialState = {
    logged: false,
  }

  test('Debería retornar el estado por defecto', () => {
    const newState = authReducer( initialState, {} );
    expect( newState ).toBe( initialState );
    expect( newState.logged ).toBe( false );
  });

  test('Debería de llamar el login autenticar y establecer el usuario', () => {
    const action = {
      type: types.login,
      payload: user
    }

    const newState = authReducer( initialState, action );
    expect( newState.logged ).toBe( true ); 
    expect( newState.user ).toBe( user );

  });

  test('Debería de logout borrar el usuario y logged en false', () => {
    const initialStateUserLogin = {
      logged: false,
      user: user
    }

    const action = {
      type: types.logout
    }

    const newState = authReducer( initialStateUserLogin, action );
    expect( newState ).toEqual( initialState );
    expect( newState.logged ).toBe( false );

  });

})