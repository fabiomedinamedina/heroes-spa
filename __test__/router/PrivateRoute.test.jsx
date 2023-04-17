import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en <PrivateRoute />', () => {
  

  test('Debere mostrar login si no está autenticado', () => {

    const contextValue = {
      logged: false
    }

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/marvel']} >
           <Routes>
            <Route path='login' element={ <h1>Página de login</h1> } />
            <Route path='/*'
              element={ 
                <PrivateRoute>
                  <h1>Ruta privada</h1>
                </PrivateRoute>
              }
             />
           </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    ); 

    expect( screen.getByText( 'Página de login' ) ).toBeTruthy();

  });
  
  test('Debere mostrar el children si está autenticado', () => {

    const contextValue = {
      logged: true,
      user: {
        name: 'Fabio Medina',
        email: 'fabio@fabiomedina.com',
      }
    }

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/marvel']} >
            <PrivateRoute>
              <h1>Ruta privada</h1>
            </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    ); 

    expect( screen.getByText( 'Ruta privada' ) ).toBeTruthy();

  });

  test('Debere llamar el localstorage', () => {

    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        name: 'Fabio Medina',
        email: 'fabio@fabiomedina.com',
      }
    }

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/marvel']} >
            <PrivateRoute>
              <h1>Ruta privada</h1>
            </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    ); 

    expect( localStorage.setItem ).toHaveBeenCalled();
    expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", '/marvel');

  });

})