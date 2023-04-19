import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from '../../../src/ui';
import { AuthContext } from '../../../src/auth';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Pruebas en <NavBar />', () => {
  
  const contextValue = {
    logged: true,
    user: {
      name: 'Fabio Medina',
      email: 'fabio@fabiomedina.com'
    },
    logoutUser: jest.fn()
  }

  beforeEach( () => jest.clearAllMocks );

  test('Debería mostrar el nombre del usuario que esta logeado', () => {

    render( 
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </AuthContext.Provider>  
    );

    expect( screen.getByText( contextValue.user.name + '!' ) ).toBeTruthy();
    expect( screen.getByText( 'Cerrar Sesión' ) ).toBeTruthy();
    
  });

  test('Debería llamar el logout y navigate cuando hace click en el botón', () => {
    
    render( 
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </AuthContext.Provider>  
    );

    const buttonLogout =  screen.getByRole('button', {name: 'btn-logout'});
    fireEvent.click( buttonLogout );
    expect( contextValue.logoutUser  ).toHaveBeenCalled();
    expect( mockUseNavigate  ).toHaveBeenCalled();
    expect( mockUseNavigate  ).toHaveBeenCalledWith( "/login", { replace: true } );

  });

})