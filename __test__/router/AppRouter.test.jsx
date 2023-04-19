import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';


describe('Pruebas en <AppRouter />', () => {

  test('Debería mostrar el login si no esta autenticado', () => {
    
    const contextValue = {
      logged: false,
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toBe('Bienvenid@!');
    expect( screen.getByText( 'Aquí podrás visualizar personajes de Marvel y DC Comics.' ) ).toBeTruthy();

  });

  test('Debería mostrar el login si no esta autenticado', () => {
    
    const contextValue = {
      logged: true,
      user: {
        name: 'Fabio Medina',
        email: 'fabio@fabiomedina.com'
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toBe('Marvel Comics');
    expect( screen.getByText( 'Fabio Medina!' ) ).toBeTruthy();
    expect( screen.getByText( 'Spider Man' ) ).toBeTruthy();

  });
  
})